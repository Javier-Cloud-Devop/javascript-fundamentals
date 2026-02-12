const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    return 'error please try again';
  }
};

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) return 'rock';
  if (random === 1) return 'paper';
  return 'scissors';
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It is a draw';
  } else if (userChoice === 'bomb') {
    return 'User wins! computer was destroyed \\-/';
  } else if (
    (userChoice === 'rock' && computerChoice === 'paper') ||
    (userChoice === 'scissors' && computerChoice === 'rock') ||
    (userChoice === 'paper' && computerChoice === 'scissors')
  ) {
    return 'Computer wins! Congratulations PC!';
  }

  return 'User wins! Congratulations Player!';
}

function playGame() {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();

  console.log(`Player chose ${userChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
