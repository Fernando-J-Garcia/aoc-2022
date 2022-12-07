import { readFileSync } from "fs";
import path from "path";
const input = readFileSync(path.resolve(__dirname, "./input.txt")).toString();
const groupedItems = input.split("\r\n\r\n");

const highestArray: number[] = [];
let highest = 0;
console.log(groupedItems.length);
groupedItems.forEach((group) => {
  const caloriesList = group.split("\r\n");
  console.log(caloriesList);
  const total = caloriesList.reduce((p, v) => p + parseInt(v), 0);
  highest = Math.max(total, highest);
  highestArray.push(total);
});
const topThree = highestArray.sort((a, b) => a - b).slice(-3);
console.log(topThree);
console.log(highest);
const total = topThree.reduce((p, v) => p + v, 0);
console.log(total);
