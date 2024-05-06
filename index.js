import { getRandomValues } from "crypto";
import inquirer from "inquirer";
// y=mx-c
// m=(y2-y1)/(x2-x1)
// i=pnr]
const randomNum = getRandomValues;
const p = randomNum;
const n = randomNum;
const r = randomNum;
const answer = await inquirer.prompt([
    { message: "please type Principle Amount", type: "number", name: "p" },
    { message: "please type numers of years", type: "number", name: "n" },
    { message: "please type rate of interest", type: "number", name: "r" },
]);
console.log("Total rate of interest is", answer.p * answer.n * answer.r / 100);
console.log("Total Amount", answer.p + answer.p * answer.n * answer.r / 100);
