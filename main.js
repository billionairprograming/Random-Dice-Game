const scoreTracker = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  scoreTracker[roll]++;
  console.log(`You rolled a ${roll}`);
}

function displayScores() {
  console.log(`Dice rolled scrore tracker:`);
  for (const roll in scoreTracker) {
    console.log(`${roll}: ${scoreTracker[roll]} times`);
  }
}

for (let i = 0; i < 50; i++) {
  rollDice();
}

displayScores();
