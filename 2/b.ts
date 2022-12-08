import { readFileSync } from "fs";
import path from "path";
const input = readFileSync(path.resolve(__dirname, "./input.txt")).toString();
const lines = input.split("\r\n");
console.log(lines);
let totalScore = 0;
for (const line of lines) {
  const [a, b] = line.split(" ");
  const [opp, des] = [convertToNumber(a), convertToNumber(b)];
  const pick = getPick(opp, des);
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
function getPick(opp: number, des: number) {
  switch (des) {
    case 1:
      switch (opp) {
        case 1:
          return 3;
        case 2:
          return 1;
        case 3:
          return 2;
      }
    case 2:
      return opp;
    case 3:
      switch (opp) {
        case 1:
          return 2;
        case 2:
          return 3;
        case 3:
          return 1;
      }
  }
  return 1;
}
