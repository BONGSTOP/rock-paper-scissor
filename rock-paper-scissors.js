let humanScore = 0;
let computerScore = 0;
let round = 0;
const computerChoices = document.querySelector("#computer-choice img");
const humanChoice = document.querySelector("#human-choice img");

const continueButton = document
  .querySelector("#continue-btn")
  .addEventListener("click", () => {
    console.log(round, humanScore, computerScore);

    if (
      (round == 5 && humanScore > computerScore) ||
      (round == 6 && humanScore > computerScore)
    ) {
      document.querySelector("#modal2-message").textContent =
        "Game Over! You Win!";
      my_modal_1.close();
      my_modal_2.showModal();
      return;
    }

    if (
      (round == 5 && humanScore < computerScore) ||
      (round == 6 && humanScore < computerScore)
    ) {
      document.querySelector("#modal2-message").textContent =
        "Game Over! Computer Wins!";
      my_modal_1.close();
      my_modal_2.showModal();

      return;
    }

    if (
      (humanScore == computerScore && round == 5) ||
      (round == 6 && humanScore == computerScore)
    ) {
      document.querySelector("#modal3-message").textContent =
        "It's a tie! We're going to sudden death!";
      my_modal_1.close();
      my_modal_3.showModal();
      return;
    }
  });

const restartGameButton = document
  .querySelector("#modal2-btn")
  .addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    document.querySelector("#user-score").textContent = "Human: " + humanScore;
    document.querySelector("#computer-score").textContent =
      "Computer: " + computerScore;
    document.querySelector("#round").textContent = "Round: " + round;
    my_modal_2.close();
  });

const suddenDeathButton = document
  .querySelector("#modal3-btn")
  .addEventListener("click", () => {
    playGame(6);
  });

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return (computerChoices.src = "../assets/rock-computer.png");
    case 1:
      return (computerChoices.src = "../assets/paper-computer.png");
    case 2:
      return (computerChoices.src = "../assets/scissors-computer.png");
  }
}

function playRound() {
  if (
    humanChoice.src.endsWith("rock-human.png") &&
    computerChoices.src.endsWith("rock-computer.png")
  ) {
    return "It's a tie!";
  }

  if (
    humanChoice.src.endsWith("rock-human.png") &&
    computerChoices.src.endsWith("paper-computer.png")
  ) {
    return "Paper Covers Rock! Computer Wins!";
  }

  if (
    humanChoice.src.endsWith("rock-human.png") &&
    computerChoices.src.endsWith("scissors-computer.png")
  ) {
    return "Rock Crushes Scissors! You Win!";
  }

  if (
    humanChoice.src.endsWith("paper-human.png") &&
    computerChoices.src.endsWith("rock-computer.png")
  ) {
    return "Paper Covers Rock! You Win!";
  }

  if (
    humanChoice.src.endsWith("paper-human.png") &&
    computerChoices.src.endsWith("paper-computer.png")
  ) {
    return "It's a tie!";
  }

  if (
    humanChoice.src.endsWith("paper-human.png") &&
    computerChoices.src.endsWith("scissors-computer.png")
  ) {
    return "Scissors Cuts Paper! Computer Wins!";
  }

  if (
    humanChoice.src.endsWith("scissors-human.png") &&
    computerChoices.src.endsWith("rock-computer.png")
  ) {
    return "Rock Crushes Scissors! Computer Wins!";
  }

  if (
    humanChoice.src.endsWith("scissors-human.png") &&
    computerChoices.src.endsWith("paper-computer.png")
  ) {
    return "Scissors Cuts Paper! You Win!";
  }

  if (
    humanChoice.src.endsWith("scissors-human.png") &&
    computerChoices.src.endsWith("scissors-computer.png")
  ) {
    return "It's a tie!";
  }
}

function updateScoreAndRound() {
  if (playRound().includes("You Win!")) {
    humanScore++;
  } else if (playRound().includes("Computer Wins!")) {
    computerScore++;
  }

  return { computerScore, humanScore, round };
}

function playGame(num) {
  document.querySelector("#rock-btn").addEventListener("click", () => {
    if (round >= num) {
      return;
    }
    round++;
    humanChoice.src = "../assets/rock-human.png";
    getComputerChoice();
    document.querySelector("#message").textContent = playRound();
    updateScoreAndRound();
    document.querySelector("#user-score").textContent = "Human: " + humanScore;
    document.querySelector("#computer-score").textContent =
      "Computer: " + computerScore;
    document.querySelector("#round").textContent = "Round: " + round;
    my_modal_1.showModal();
  });

  document.querySelector("#paper-btn").addEventListener("click", () => {
    if (round >= num) {
      return;
    }
    round++;
    humanChoice.src = "../assets/paper-human.png";
    getComputerChoice();
    document.querySelector("#message").textContent = playRound();
    updateScoreAndRound();
    document.querySelector("#user-score").textContent = "Human: " + humanScore;
    document.querySelector("#computer-score").textContent =
      "Computer: " + computerScore;
    document.querySelector("#round").textContent = "Round: " + round;
    my_modal_1.showModal();
  });

  document.querySelector("#scissors-btn").addEventListener("click", () => {
    if (round >= num) {
      return;
    }
    round++;
    humanChoice.src = "../assets/scissors-human.png";
    getComputerChoice();
    document.querySelector("#message").textContent = playRound();
    updateScoreAndRound();
    document.querySelector("#user-score").textContent = "Human: " + humanScore;
    document.querySelector("#computer-score").textContent =
      "Computer: " + computerScore;
    document.querySelector("#round").textContent = "Round: " + round;
    my_modal_1.showModal();
  });
}

playGame(5);
