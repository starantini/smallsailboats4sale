const { db } = require("./server/db");

const User = require("./server/db/models/User");
const Boat = require("./server/db/models/Boat");

const randomNumber = () => Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

const users = [
  {
    username: "bob",
    password: "bob",
    email: "bob@email.com",
  },
  {
    username: "dan",
    password: "dan",
    email: "dan@email.com",
  },
  {
    username: "steve",
    password: "steve",
    email: "steve@email.com",
  },
];

const boats = [
  {
    brand: "laser",
    length: 14,
    price: randomNumber(),
  },
  {
    brand: "moth",
    length: 13,
    price: randomNumber(),
  },
  {
    brand: "custom",
    length: 8,
    price: randomNumber(),
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      users.map((user) => {
        return User.create(user);
      }),
      boats.map((boat) => {
        return Boat.create(boat);
      })
    );

    console.log("Seeding succeeded");
    db.close();
  } catch (err) {
    console.error("Failed seeding operation");
    console.error(err);
    db.close();
  }
};

seed();
