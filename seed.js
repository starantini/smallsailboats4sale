const { db } = require("./server/db");

const Campus = require("./server/db/models/Campus");
const Student = require("./server/db/models/Student");

const campuses = [
  {
    name: "US College",
    address: "123 Student Ln",
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Best University",
    address: "186 Superior Ln",
    description:
      "a place to spend a lot of money, to learn the same but feel superior to all the poor people",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "WhoDoneIt Detectives College",
    address: "221 Baker Street",
    description:
      "a really great place to find out who you are by finding the people whoDoneIt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
];

const students = [
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: 3.5,
    imgUrl:
      "https://imgs.search.brave.com/lB9Pilgnpf8JGrDVTD6ymx754-K9d7yYs1W8UKxjS9I/rs:fit:576:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/OW9GR2U4TG9laWtX/VGVzSWxoVmlRSGFH/RyZwaWQ9QXBp",
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: 3.9,
    imgUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
  },
  {
    firstName: "Ward",
    lastName: "Hack",
    email: "wardhack@email.com",
    gpa: 2.3,
    imgUrl:
      "https://imgs.search.brave.com/fySxxZBHmNEmHabAvCgQZwAzASkskauZVDv5yBbGjGo/rs:fit:184:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/MVY2RW9XNUJMWkZy/dktqS0ZseWlnQUFB/QSZwaWQ9QXBp",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      campuses.map((campus) => {
        return Campus.create(campus);
      }),
      students.map((student) => {
        return Student.create(student);
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
