import { readFileSync } from "fs";
import path from "path";
const input = readFileSync(path.resolve(__dirname, "./input.txt")).toString();
const groupedItems = input.split("\r\n\r\n");

let highest = 0;
console.log(groupedItems.length);
groupedItems.forEach((group) => {
  const caloriesList = group.split("\n");
  const total = caloriesList.reduce((p, v) => p + parseInt(v), 0);
  highest = Math.max(total, highest);
});
console.log(highest);
