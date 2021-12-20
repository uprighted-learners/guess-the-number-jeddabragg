//----------------readline-----------------//
//Loading the readline package from Node.JS and naming it readline
const readline = require("readline");
//Creates an interface to readline using the following setttings for input, with the standard input stream as the terminal keyboard and the standard output stream as the console.
const rl = readline.createInterface(process.stdin, process.stdout);
//A function named ask that uses the Promise API to asynchronously ask a question and wait for a reply.
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//----------------Guess the number--------------//
//Calling the start function to be sent to the terminal
start();
//the game itself will be asynchronous to wait on user input to guide the game's decision making
async function start() {
  console.log(
    "Let's play a game where you (the human) make up a number and I (the computer) try to guess it."
  );
  //setting up variables to check against in the loop
  //allowing the user to decide what the range will be of the guessing game with their keyboard input into the terminal
  let max = await ask(
    "You can set the range. How high do we want to be guessing?"
  );
  //the minimum of the range will be set at 1
  let min = 1;
  let range = max - min + 1;
  //this variable generates a random number between 1 and whatever the user sets as the max number to guess
  let compRandoNum = Math.floor(Math.random() * range + min);
  //do I need to reassign this variable or just use compRandoNum?
  let compNumber = compRandoNum;

  //assigning a variable to the user input
  //this currently isn't being used anywhere else
  let mySecretNum = await ask(
    "What is your secret number? I won't peek, I promise..."
  );

  console.log(
    "Ok, I have your number stored away where nobody can see it. Now I want to try and guess it"
  );

  async function compGuess() {
    //using assigned variables for the computer to generate a random number and output it as a 'guess'
    let guess = await ask(`Is your number ${compNumber}?`);
    console.log(guess);

    //
    while (guess !== "y") {
      guess = await ask("Ok, well is your number higher or lower?");
      if (guess === "h") {
        min = compNumber;
        compNumber = Math.floor((max - compNumber) / 2 + compNumber);
        guess = await ask(`Ok, well is your number ${compNumber}?`);
      } else if (guess === "l") {
        max = compNumber;
        compNumber = Math.floor((compNumber - min) / 2 + min);
        guess = await ask(`Ok well is your number ${compNumber}?`);
        console.log(max);
        console.log(compNumber);
        console.log(guess);
        if (guess <= "l" || guess >= "h") {
          console.log("You are cheating!");
        }
      }
    }
    console.log("Wow, I got it! That was super easy.");

    async function attempts(numberOfInputs) {
      let numberOfInputs = p
      let tryCount = (numberOfInputs)

      console.log('It only took me' + tryCount)
      }
      attempts()
      
    //prompts to play the game again
    async function playAgain() {
      let res = await ask("That was fun. Want to play again?");
      //whie loop with logic to exit the game or play it again if the user wants to
      while (res !== "y") {
        process.exit();
      }
      if (res !== "n") {
        res = await ask(start());
      }
    }
    playAgain();
  }
  compGuess();
}
