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
  let player = 0;
  let opp = 0;

  const choices = {
    A: { loses: 'Y', wins: 'Z' },
    B: { loses: 'Z', wins: 'X' },
    C: { loses: 'X', wins: 'Y' },
  };
  //go thru the array
  for (let i = 0; i < array.length; i++) {
    //round score
    let playerScore = 0;
    let oppScore = 0;
    const ele = array[i];
    //opp
    const opp = ele[0];
    //player
    const player = ele[2];

    //compare
    console.log(choices[opp].wins === player);
    if (choices[opp].wins == player) {
      console.log(opp);
      console.log('Wins');
    } else if (choices[opp].loses == player) {
      console.log('Loss');
    }
  }
}

playTheGame(example);
