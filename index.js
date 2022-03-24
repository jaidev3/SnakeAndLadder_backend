const express = require("express");
const app = express();

app.use(express.json());

let numberPlayer = 0;
let i = -1;
let arr;

app.post("/player", (req, res) => {
  numberPlayer = req.body.guests;
  arr = new Array(numberPlayer).fill(0);
  res.send({ numberPlayer });
});

console.log(numberPlayer);

app.get("/dice", (req, res) => {
  let diceNumber = Math.floor(Math.random() * 16) + 1;
  console.log(diceNumber);

  i++;
  if (i > arr.length - 1) {
    i = 0;
  }

  res.json({
    player: i,
    currentPosition: snakeLader(diceNumber),
    currentDice: diceNumber,
  });
});

function snakeLader(diceNumber) {
  ///arr=[0,0]

  if (arr[i] < 100 && diceNumber <= 100 - arr[i]) {
    arr[i] = arr[i] + diceNumber;
  }
  if (arr[i] == 100) {
    return `Winner Winner Chicken Dinner${i}`;
  }

  /////////ladder logic//////////
  if (arr[i] == 10) {
    arr[i] = 22;
  }
  if (arr[i] == 19) {
    arr[i] = 56;
  }
  if (arr[i] == 44) {
    arr[i] = 78;
  }
  if (arr[i] == 35) {
    arr[i] = 90;
  }
  if (arr[i] == 70) {
    arr[i] = 88;
  }

  /////////snake logic/////////////

  if (arr[i] == 33) {
    arr[i] = 20;
  }
  if (arr[i] == 68) {
    arr[i] = 41;
  }
  if (arr[i] == 70) {
    arr[i] = 2;
  }

  return arr[i];
}
console.log(arr);

app.listen(4000, () => {
  console.log("server running on port 4000");
});
