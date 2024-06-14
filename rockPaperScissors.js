function rockPaperScissors() {
  const arr = ["Rock", "Paper", "Scissors"];
  console.log("1.Rock\n2.Paper\n3.Scissors");

  const CPU = Math.floor(Math.random() * 3);
  const inp = Number(prompt("Select Your Choice: "));

  const yourChoice = arr[inp - 1];
  const CPUChoice = arr[CPU];

  if (yourChoice != undefined) {
    console.log(
      `Your Choice is "${yourChoice}" & CPU Choice is "${CPUChoice}"`
    );
  }

  switch (yourChoice) {
    case "Rock":
      if (CPUChoice == "Paper") {
        console.log("You Lose!!");
      } else if (CPUChoice == "Scissors") {
        console.log("You Win");
      } else {
        console.log("You have Tie");
      }
      break;

    case "Paper":
      if (CPUChoice == "Scissors") {
        console.log("You Lose!!");
      } else if (CPUChoice == "Rock") {
        console.log("You Win");
      } else {
        console.log("You have Tie");
      }
      break;

    case "Scissors":
      if (CPUChoice == "Rock") {
        console.log("You Lose!!");
      } else if (CPUChoice == "Paper") {
        console.log("You Win");
      } else {
        console.log("You have Tie");
      }
      break;

    default:
      console.log("You Entered Wrong Input!!!");
      break;
  }
}

rockPaperScissors();
