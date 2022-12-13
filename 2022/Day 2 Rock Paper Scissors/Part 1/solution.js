const fs = require('fs');

//split the data into two lines
let data = fs
  .readFileSync(path.resolve(__dirname, './data.txt'))
  .toString('utf8')
  .split(/\n/);
data = data.filter((ele) => ele != '');

//example data
let example = fs
  .readFileSync(path.resolve(__dirname, './example.txt'))
  .toString('utf8')
  .split(/\n/);
example = example.filter((ele) => ele != '');

// console.log(example);
// First Column
//A --> rock
//B --> paper
//C --> Scissor

//Second Column
//X --> rock
//Y --> paper
//Z --> scissor

function playTheGame(array) {
  //player scores
  let totalPlayerScore = 0;
  let totalOppScore = 0;

  const choices = {
    A: { loses: 'Y', wins: 'Z' },
    B: { loses: 'Z', wins: 'X' },
    C: { loses: 'X', wins: 'Y' },
  };

  const score = {
    A: 1,
    X: 1,
    B: 2,
    Y: 2,
    C: 3,
    Z: 3,
  };

  //go thru the array
  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    //opp
    const opp = ele[0];
    //player
    const player = ele[2];

    //compare
    console.log(choices[opp].wins === player);
    if (choices[opp].wins == player) {
      console.log(opp);
      console.log('OPP Wins');
      const playerScore = score[player] + 0;
      const oppScore = score[opp] + 6;
      console.log(playerScore);
      console.log(oppScore);
      totalPlayerScore += playerScore;
      totalOppScore += oppScore;
    } else if (choices[opp].loses == player) {
      console.log('OPP Loss');
      const playerScore = score[player] + 6;
      const oppScore = score[opp] + 0;
      totalPlayerScore += playerScore;
      totalOppScore += oppScore;
    } else {
      console.log('Tie');
      const playerScore = score[player] + 3;
      const oppScore = score[opp] + 3;
      totalPlayerScore += playerScore;
      totalOppScore += oppScore;
    }
  }

  console.log(totalOppScore);
  console.log(totalPlayerScore);
}

// playTheGame(example);
playTheGame(data);
