//----------------readline-----------------//
//Loading the readline package from Node.JS and naming it readline
const { ok } = require("assert");
const { Console } = require("console");
const readline = require("readline");
//Creates an interface to readline using the following setttings for input, with the standard input stream as the terminal keyboard and the standard output stream as the console.
const rl = readline.createInterface(process.stdin, process.stdout);
//A function named ask that uses the Promise API to asynchronously ask a question and wait for a reply.
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//-----------------Guess the number desrever-------------//
//calling the game to the console
game();

async function game() {
  console.log(
    "Now, I have a random number in my memory and I want you to guess it."
  );

  let min = 1;
  let max = 100;
  let range = max - min + 1;
  let compNum = Math.floor(Math.random() * range + min);

  console.log("Go ahead, take a guess.");

  let numInput = await ask("");

  let myGuess = parseInt(numInput);

  async function machineBattle() {
    while (myGuess !== compNum) {
      console.log("No, that is not the number in my memory");
      if (compNum >= myGuess) {
        console.log("The number stored in my memory is higher");
        console.log("Go ahead, guess again.");
        numInput = await ask("");
        myGuess = parseInt(numInput);
      } else if (compNum <= myGuess) {
        console.log("The number in my memory is lower");
        console.log("Go ahead, guess again.");
        numInput = await ask("");
        myGuess = parseInt(numInput);
      }
    }
    console.log("Dang, you got it. You are good.");
    //prompts to play the game again
    async function playAgain() {
      let res = await ask("That was fun. Want to play again?");
      //whie loop with logic to exit the game or play it again if the user wants to
      while (res !== "y") {
        console.log('Right on, see you later!')
        process.exit();
      }
      if (res !== "n") {
        res = await ask(game());
      }
    }
    playAgain();
  }
  machineBattle();
}
