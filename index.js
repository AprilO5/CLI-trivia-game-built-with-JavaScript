const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to the Color Trivia Game!");

rl.question("What are the three primary colors? ", (answer1) => {

  if (answer1.toLowerCase().includes("red") &&
      answer1.toLowerCase().includes("blue") &&
      answer1.toLowerCase().includes("yellow")) {
    console.log("Correct!");
  } else {
    console.log("Not quite. The primary colors are red, blue, and yellow.");
  }

  rl.question("Who discovered the color spectrum? ", (answer2) => {

    if (answer2.toLowerCase().includes("newton")) {
      console.log("Correct!");
    } else {
      console.log("Incorrect. The answer is Isaac Newton.");
    }

    rl.question("What color is commonly used to represent danger? ", (answer3) => {

      if (answer3.toLowerCase() === "red") {
        console.log("Correct!");
      } else {
        console.log("Incorrect. Red usually represents danger.");
      }

      rl.question("What color is often associated with nature? ", (answer4) => {

        if (answer4.toLowerCase() === "green") {
          console.log("Correct!");
        } else {
          console.log("Incorrect. Green usually represents nature.");
        }

        rl.question("What color is commonly associated with happiness? ", (answer5) => {

          if (answer5.toLowerCase() === "yellow") {
            console.log("Correct!");
          } else {
            console.log("Incorrect. Yellow is often associated with happiness.");
          }

          console.log("Thanks for playing the Color Trivia Game!");
          rl.close();
        });
      });
    });
  });
});