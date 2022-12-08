import { readFileSync } from "fs";
import path from "path";
const input = readFileSync(path.resolve(__dirname, "./input.txt")).toString();
const lines = input.split("\r\n");
console.log(lines);
let totalScore = 0;
for (const line of lines) {
  const [a, b] = line.split(" ");
  const [opp, pick] = [convertToNumber(a), convertToNumber(b)];
  let score = 0;
  if (pick === opp) {
    score += 3;
  } else if (
    (pick === 1 && opp === 2) ||
    (pick === 2 && opp == 3) ||
    (pick === 3 && opp === 1)
  ) {
    //lost no score added
  } else {
    score += 6;
  }
  console.log(opp, pick, score);
  totalScore += score += pick;
}
console.log(totalScore);

function convertToNumber(s: string) {
  switch (s) {
    case "X":
    case "A":
      return 1;
    case "Y":
    case "B":
      return 2;
    case "Z":
    case "C":
      return 3;
  }
  return 1;
}
