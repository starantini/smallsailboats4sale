import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
  CONSTANT VARIABLES
*/
const TOKEN = "token";

/*
  THUNKS
*/

//me is defined here, using the auth/me route it gets the item from
//window localStorage grabs teh token, assigns it to value token
export const me = createAsyncThunk("auth/me", async () => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    //if a token exists than we get headers authorization token and set it to the response.

    if (token) {
      const res = await axios.get("/auth/me", {
        headers: {
          authorization: token,
        },
      });
      //we return the res.data specifically to be used as payload in the reducer below
      console.log("res.data:", res.data);
      return res.data;
    } else {
      return {};
    }
  } catch (err) {
    if (err.response.data) {
      return thunkAPI.rejectWithValue(err.response.data);
    } else {
      return "There was an issue with your request.";
    }
  }
});
//authenticate function is defined
export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async ({ username, password, method }, thunkAPI) => {
    try {
      //an axios post request is intiated with username and password
      const res = await axios.post(`/auth/${method}`, { username, password });
      //window local Storage is set to that user token from res.data.token, the key is set
      //by the above defined token string
      window.localStorage.setItem(TOKEN, res.data.token);

      thunkAPI.dispatch(me());
    } catch (err) {
      if (err.response.data) {
        return thunkAPI.rejectWithValue(err.response.data);
      } else {
        return "There was an issue with your request.";
      }
    }
  }
);

/*
  SLICE
*/
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    //me is intialize to empty object
    me: {},
    //error is intialized to null
    error: null,
  },
  reducers: {
    //logout function is defined it removes the users token from localstorage
    //sets the me state to empty and the state error to null aswell
    logout(state, action) {
      window.localStorage.removeItem(TOKEN);
      state.me = {};
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    //takes the res.data and sets state.me with it
    builder.addCase(me.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    //if rejected sets the state.error with the payload error
    builder.addCase(me.rejected, (state, action) => {
      state.error = action.error;
    });
    //if authenticate is rejected the state.error is set with that error
    builder.addCase(authenticate.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

/*
  ACTIONS
*/
//exports logout function from slice to be used elsewhere like in navbar component
export const { logout } = authSlice.actions;

/*
  REDUCER
*/
export default authSlice.reducer;
