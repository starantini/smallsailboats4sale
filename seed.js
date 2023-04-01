const { db } = require("./server/db");

const Campus = require("./server/db/models/Campus");
const Student = require("./server/db/models/Student");

const randomNumber = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const randomGpaNumber = () => (Math.random() * 3 + 1).toFixed(1);
console.log(randomGpaNumber());
console.log(randomGpaNumber());

const campuses = [
  {
    name: "Ecole Polytechnique Fédérale de Lausanne (EPFL)  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Ecole Polytechnique Fédérale de Lausanne (EPFL)  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Ecole Polytechnique Fédérale de Lausanne (EPFL)  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Ecole Polytechnique Fédérale de Lausanne (EPFL)  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Ecole Polytechnique Fédérale de Lausanne (EPFL)  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Massachusetts Institute of Technology (MIT) ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "US College",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Best University",
    address: `${randomNumber()} Student Ln`,
    description:
      "a place to spend a lot of money, to learn the same but feel superior to all the poor people",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "WhoDoneIt Detectives College",
    address: `${randomNumber()} Student Ln`,
    description:
      "a really great place to find out who you are by finding the people whoDoneIt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Pennsylvania ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Pennsylvania ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Pennsylvania ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Pennsylvania ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Pennsylvania ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Oxford  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Oxford  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Oxford  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Oxford  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Stanford University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Cambridge  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Massachusetts Institute of Technology (MIT) ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "US College",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Best University",
    address: `${randomNumber()} Student Ln`,
    description:
      "a place to spend a lot of money, to learn the same but feel superior to all the poor people",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "WhoDoneIt Detectives College",
    address: `${randomNumber()} Student Ln`,
    description:
      "a really great place to find out who you are by finding the people whoDoneIt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Ecole Polytechnique Fédérale de Lausanne (EPFL)  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Ecole Polytechnique Fédérale de Lausanne (EPFL)  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Ecole Polytechnique Fédérale de Lausanne (EPFL)  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Ecole Polytechnique Fédérale de Lausanne (EPFL)  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Ecole Polytechnique Fédérale de Lausanne (EPFL)  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Massachusetts Institute of Technology (MIT) ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "US College",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Best University",
    address: `${randomNumber()} Student Ln`,
    description:
      "a place to spend a lot of money, to learn the same but feel superior to all the poor people",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "WhoDoneIt Detectives College",
    address: `${randomNumber()} Student Ln`,
    description:
      "a really great place to find out who you are by finding the people whoDoneIt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Princeton University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Pennsylvania ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Pennsylvania ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Pennsylvania ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Pennsylvania ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Pennsylvania ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Chicago ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "California Institute of Technology (Caltech)",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Oxford  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Oxford  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Oxford  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Oxford  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Stanford University ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "University of Cambridge  ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Massachusetts Institute of Technology (MIT) ",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "US College",
    address: `${randomNumber()} Student Ln`,
    description: "a really great place to go into debt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "Best University",
    address: `${randomNumber()} Student Ln`,
    description:
      "a place to spend a lot of money, to learn the same but feel superior to all the poor people",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
  {
    name: "WhoDoneIt Detectives College",
    address: `${randomNumber()} Student Ln`,
    description:
      "a really great place to find out who you are by finding the people whoDoneIt",
    imageUrl:
      "https://imgs.search.brave.com/--cvLvqkAaZ2PmuyGcM_OMPR_y7dPr4-mBbzaFZyvkw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/eGltbG43cE9XRy1a/Rkk5eWpJSzJBSGFF/byZwaWQ9QXBp",
  },
];

//------------------------------------------------------------------
//Break to Clearly find the difference between Campuses and Students
//------------------------------------------------------------------

const students = [
  {
    firstName: "Jennifer",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Albert",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Bertha",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Marigold",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: 3.5,
    imageUrl:
      "https://imgs.search.brave.com/lB9Pilgnpf8JGrDVTD6ymx754-K9d7yYs1W8UKxjS9I/rs:fit:576:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/OW9GR2U4TG9laWtX/VGVzSWxoVmlRSGFH/RyZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Freddy",
    lastName: "Hack",
    email: "wardhack@email.com",
    gpa: 2.3,
    imageUrl:
      "https://imgs.search.brave.com/fySxxZBHmNEmHabAvCgQZwAzASkskauZVDv5yBbGjGo/rs:fit:184:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/MVY2RW9XNUJMWkZy/dktqS0ZseWlnQUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jennifer",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Calvin",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Zebra",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gerry",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: 3.5,
    imageUrl:
      "https://imgs.search.brave.com/lB9Pilgnpf8JGrDVTD6ymx754-K9d7yYs1W8UKxjS9I/rs:fit:576:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/OW9GR2U4TG9laWtX/VGVzSWxoVmlRSGFH/RyZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Allison",
    lastName: "Presley",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Kent",
    lastName: "Hack",
    email: "wardhack@email.com",
    gpa: 2.3,
    imageUrl:
      "https://imgs.search.brave.com/fySxxZBHmNEmHabAvCgQZwAzASkskauZVDv5yBbGjGo/rs:fit:184:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/MVY2RW9XNUJMWkZy/dktqS0ZseWlnQUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jennifer",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jerry",
    lastName: "Smarty",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Nancy",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Tea",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: 3.5,
    imageUrl:
      "https://imgs.search.brave.com/lB9Pilgnpf8JGrDVTD6ymx754-K9d7yYs1W8UKxjS9I/rs:fit:576:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/OW9GR2U4TG9laWtX/VGVzSWxoVmlRSGFH/RyZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Mobile",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Ward",
    lastName: "Hack",
    email: "wardhack@email.com",
    gpa: 2.3,
    imageUrl:
      "https://imgs.search.brave.com/fySxxZBHmNEmHabAvCgQZwAzASkskauZVDv5yBbGjGo/rs:fit:184:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/MVY2RW9XNUJMWkZy/dktqS0ZseWlnQUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jennifer",
    lastName: "Nike",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Sailor",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Aavark",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Goose",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Vitaly",
    email: "mattsmith@email.com",
    gpa: 3.5,
    imageUrl:
      "https://imgs.search.brave.com/lB9Pilgnpf8JGrDVTD6ymx754-K9d7yYs1W8UKxjS9I/rs:fit:576:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/OW9GR2U4TG9laWtX/VGVzSWxoVmlRSGFH/RyZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gymrat",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Ward",
    lastName: "Hack",
    email: "wardhack@email.com",
    gpa: 2.3,
    imageUrl:
      "https://imgs.search.brave.com/fySxxZBHmNEmHabAvCgQZwAzASkskauZVDv5yBbGjGo/rs:fit:184:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/MVY2RW9XNUJMWkZy/dktqS0ZseWlnQUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jennifer",
    lastName: "Halpert",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Beasely",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Scott",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Stanley",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Creed",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Right",
    email: "mattsmith@email.com",
    gpa: 3.5,
    imageUrl:
      "https://imgs.search.brave.com/lB9Pilgnpf8JGrDVTD6ymx754-K9d7yYs1W8UKxjS9I/rs:fit:576:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/OW9GR2U4TG9laWtX/VGVzSWxoVmlRSGFH/RyZwaWQ9QXBp",
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Ward",
    lastName: "Hack",
    email: "wardhack@email.com",
    gpa: 2.3,
    imageUrl:
      "https://imgs.search.brave.com/fySxxZBHmNEmHabAvCgQZwAzASkskauZVDv5yBbGjGo/rs:fit:184:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/MVY2RW9XNUJMWkZy/dktqS0ZseWlnQUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jennifer",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: 3.5,
    imageUrl:
      "https://imgs.search.brave.com/lB9Pilgnpf8JGrDVTD6ymx754-K9d7yYs1W8UKxjS9I/rs:fit:576:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/OW9GR2U4TG9laWtX/VGVzSWxoVmlRSGFH/RyZwaWQ9QXBp",
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Ward",
    lastName: "Hack",
    email: "wardhack@email.com",
    gpa: 2.3,
    imageUrl:
      "https://imgs.search.brave.com/fySxxZBHmNEmHabAvCgQZwAzASkskauZVDv5yBbGjGo/rs:fit:184:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/MVY2RW9XNUJMWkZy/dktqS0ZseWlnQUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jennifer",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: 3.5,
    imageUrl:
      "https://imgs.search.brave.com/lB9Pilgnpf8JGrDVTD6ymx754-K9d7yYs1W8UKxjS9I/rs:fit:576:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/OW9GR2U4TG9laWtX/VGVzSWxoVmlRSGFH/RyZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Ward",
    lastName: "Hack",
    email: "wardhack@email.com",
    gpa: 2.3,
    imageUrl:
      "https://imgs.search.brave.com/fySxxZBHmNEmHabAvCgQZwAzASkskauZVDv5yBbGjGo/rs:fit:184:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/MVY2RW9XNUJMWkZy/dktqS0ZseWlnQUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jennifer",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: 3.5,
    imageUrl:
      "https://imgs.search.brave.com/lB9Pilgnpf8JGrDVTD6ymx754-K9d7yYs1W8UKxjS9I/rs:fit:576:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/OW9GR2U4TG9laWtX/VGVzSWxoVmlRSGFH/RyZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Ward",
    lastName: "Hack",
    email: "wardhack@email.com",
    gpa: 2.3,
    imageUrl:
      "https://imgs.search.brave.com/fySxxZBHmNEmHabAvCgQZwAzASkskauZVDv5yBbGjGo/rs:fit:184:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/MVY2RW9XNUJMWkZy/dktqS0ZseWlnQUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jennifer",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: 3.5,
    imageUrl:
      "https://imgs.search.brave.com/lB9Pilgnpf8JGrDVTD6ymx754-K9d7yYs1W8UKxjS9I/rs:fit:576:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/OW9GR2U4TG9laWtX/VGVzSWxoVmlRSGFH/RyZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Ward",
    lastName: "Hack",
    email: "wardhack@email.com",
    gpa: 2.3,
    imageUrl:
      "https://imgs.search.brave.com/fySxxZBHmNEmHabAvCgQZwAzASkskauZVDv5yBbGjGo/rs:fit:184:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/MVY2RW9XNUJMWkZy/dktqS0ZseWlnQUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jennifer",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: `${randomGpaNumber()}`,
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Matt",
    lastName: "Smith",
    email: "mattsmith@email.com",
    gpa: 3.5,
    imageUrl:
      "https://imgs.search.brave.com/lB9Pilgnpf8JGrDVTD6ymx754-K9d7yYs1W8UKxjS9I/rs:fit:576:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/OW9GR2U4TG9laWtX/VGVzSWxoVmlRSGFH/RyZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Jenny",
    lastName: "Gump",
    email: "JennyGump@email.com",
    gpa: `${randomGpaNumber()}`,
    imageUrl:
      "https://imgs.search.brave.com/cB7OlGOdbwtzHdFOricd-Ripqty0Tc8g0KbDAszLuVs/rs:fit:185:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/ZlY5VE5CcHFPdkVm/X1FWSXB2cUR3QUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
  },
  {
    firstName: "Ward",
    lastName: "Hack",
    email: "wardhack@email.com",
    gpa: 2.3,
    imageUrl:
      "https://imgs.search.brave.com/fySxxZBHmNEmHabAvCgQZwAzASkskauZVDv5yBbGjGo/rs:fit:184:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/MVY2RW9XNUJMWkZy/dktqS0ZseWlnQUFB/QSZwaWQ9QXBp",
    campusId: `${randomNumber()}`,
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
