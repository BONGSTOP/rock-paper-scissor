class RockPaperScissors {
  constructor() {
    this.humanScore = 0;
    this.computerScore = 0;
    this.round = 0;
    this.computerChoices = document.querySelector("#computer-choice img");
    this.humanChoice = document.querySelector("#human-choice img");
    this.initEventListeners();
  }

  initEventListeners() {
    document
      .querySelector("#continue-btn")
      .addEventListener("click", () => this.continueGame());
    document
      .querySelector("#modal2-btn")
      .addEventListener("click", () => this.restartGame());
    document
      .querySelector("#modal3-btn")
      .addEventListener("click", () => this.playGame(6));
    document
      .querySelector("#rock-btn")
      .addEventListener("click", () => this.makeChoice("rock"));
    document
      .querySelector("#paper-btn")
      .addEventListener("click", () => this.makeChoice("paper"));
    document
      .querySelector("#scissors-btn")
      .addEventListener("click", () => this.makeChoice("scissors"));
  }

  continueGame() {
    if (
      (this.round == 5 && this.humanScore > this.computerScore) ||
      (this.round == 6 && this.humanScore > this.computerScore)
    ) {
      document.querySelector("#modal2-message").textContent =
        "Game Over! You Win!";
      my_modal_1.close();
      my_modal_2.showModal();
      return;
    }

    if (
      (this.round == 5 && this.humanScore < this.computerScore) ||
      (this.round == 6 && this.humanScore < this.computerScore)
    ) {
      document.querySelector("#modal2-message").textContent =
        "Game Over! Computer Wins!";
      my_modal_1.close();
      my_modal_2.showModal();
      return;
    }

    if (
      (this.humanScore == this.computerScore && this.round == 5) ||
      (this.round == 6 && this.humanScore == this.computerScore)
    ) {
      document.querySelector("#modal3-message").textContent =
        "It's a tie! We're going to sudden death!";
      my_modal_1.close();
      my_modal_3.showModal();
      return;
    }
  }

  restartGame() {
    this.humanScore = "";
    this.computerScore = "";
    this.round = "";
    document.querySelector("#user-score").textContent =
      "Human: " + this.humanScore;
    document.querySelector("#computer-score").textContent =
      "Computer: " + this.computerScore;
    document.querySelector("#round").textContent = "Round: " + this.round;
    my_modal_2.close();
  }

  getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return (this.computerChoices.src = "../assets/rock-computer.png");
      case 1:
        return (this.computerChoices.src = "../assets/paper-computer.png");
      case 2:
        return (this.computerChoices.src = "../assets/scissors-computer.png");
    }
  }

  playRound() {
    if (
      this.humanChoice.src.endsWith("rock-human.png") &&
      this.computerChoices.src.endsWith("rock-computer.png")
    ) {
      return "It's a tie!";
    }
    if (
      this.humanChoice.src.endsWith("rock-human.png") &&
      this.computerChoices.src.endsWith("paper-computer.png")
    ) {
      return "Paper Covers Rock! Computer Wins!";
    }
    if (
      this.humanChoice.src.endsWith("rock-human.png") &&
      this.computerChoices.src.endsWith("scissors-computer.png")
    ) {
      return "Rock Crushes Scissors! You Win!";
    }
    if (
      this.humanChoice.src.endsWith("paper-human.png") &&
      this.computerChoices.src.endsWith("rock-computer.png")
    ) {
      return "Paper Covers Rock! You Win!";
    }
    if (
      this.humanChoice.src.endsWith("paper-human.png") &&
      this.computerChoices.src.endsWith("paper-computer.png")
    ) {
      return "It's a tie!";
    }
    if (
      this.humanChoice.src.endsWith("paper-human.png") &&
      this.computerChoices.src.endsWith("scissors-computer.png")
    ) {
      return "Scissors Cuts Paper! Computer Wins!";
    }
    if (
      this.humanChoice.src.endsWith("scissors-human.png") &&
      this.computerChoices.src.endsWith("rock-computer.png")
    ) {
      return "Rock Crushes Scissors! Computer Wins!";
    }
    if (
      this.humanChoice.src.endsWith("scissors-human.png") &&
      this.computerChoices.src.endsWith("paper-computer.png")
    ) {
      return "Scissors Cuts Paper! You Win!";
    }
    if (
      this.humanChoice.src.endsWith("scissors-human.png") &&
      this.computerChoices.src.endsWith("scissors-computer.png")
    ) {
      return "It's a tie!";
    }
  }

  updateScoreAndRound() {
    if (this.playRound().includes("You Win!")) {
      this.humanScore++;
    } else if (this.playRound().includes("Computer Wins!")) {
      this.computerScore++;
    }
    return {
      computerScore: this.computerScore,
      humanScore: this.humanScore,
      round: this.round,
    };
  }

  makeChoice(choice) {
    if (this.round >= 5) {
      return;
    }
    this.round++;
    this.humanChoice.src = `../assets/${choice}-human.png`;
    this.getComputerChoice();
    document.querySelector("#message").textContent = this.playRound();
    this.updateScoreAndRound();
    document.querySelector("#user-score").textContent =
      "Human: " + this.humanScore;
    document.querySelector("#computer-score").textContent =
      "Computer: " + this.computerScore;
    document.querySelector("#round").textContent = "Round: " + this.round;
    my_modal_1.showModal();
  }

  playGame(num) {
    this.round = "";
    this.humanScore = "";
    this.computerScore = "";
    document.querySelector("#user-score").textContent =
      "Human: " + this.humanScore;
    document.querySelector("#computer-score").textContent =
      "Computer: " + this.computerScore;
    document.querySelector("#round").textContent = "Round: " + this.round;
  }

  suddenDeath() {
    if (this.humanScore === this.computerScore) {
      document.querySelector("#modal3-message").textContent =
        "It's a tie! We're going to sudden death!";
      my_modal_1.close();
      my_modal_3.showModal();
      this.round++;
      this.makeChoice(this.humanChoice.src.split("-")[0].split("/").pop());
      this.determineWinner();
    } else {
      this.determineWinner();
    }
    this.restartGame();
  }

  determineWinner() {
    if (this.humanScore > this.computerScore) {
      document.querySelector("#modal2-message").textContent =
        "Game Over! You Win!";
    } else {
      document.querySelector("#modal2-message").textContent =
        "Game Over! Computer Wins!";
    }
    my_modal_1.close();
    my_modal_2.showModal();
  }
}

const game = new RockPaperScissors();
game.playGame(5);
