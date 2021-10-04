
//----------------readline-----------------//

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//----------------async code---------------//

start();

async function start() {
  let max = 100
  let min = 1
  let compNumber = 50
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  let firstGuess = await ask(`Is your number ${compNumber}?`)
  if (firstGuess === 'yes') {
    console.log('You got it!')
  } else if (firstGuess === 'no') {
    await ask('Is it higher or lower?')
  }
  function highOrLow() {
    
  }
  process.exit();
  }
  


