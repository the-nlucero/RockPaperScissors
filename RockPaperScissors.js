//Input Function for the "User"
const getUserChoice = userInput => 
{
//Converts "User input to lowercase"
userInput = userInput.toLowerCase();

//Conditional Statement for "User" Input
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
  {
    return userInput;
  }

  else
  {
    console.log('User has inputted an invalid return value');
  }

};

//This function will determine R,P, or S for the Computer
const getComputerChoice = () =>
{
//Random Variable Generated
const computerNum = Math.floor(Math.random() *3);

//Conditional Statements for random variable
  switch (computerNum)
  {
    case 0:
      return 'rock';
    break;

    case 1:
      return 'paper';
    break;

    case 2:
      return 'scissors';
    break;
  }

}; 

//This function will determine the winner of the game
const determineWinner = (userChoice, computerChoice) =>
{
// Opponents picked the same move
  if (userChoice === computerChoice)
  {
    return ('The game is a TIE!');
  }

//Rock Beats Sciccors
  if (userChoice === 'rock' && computerChoice === 'scissors')
  {
    return 'The User Wins! Since, rock beats sciccors.';
  }

  if (userChoice === 'scissors' && computerChoice === 'rock')
  {
    return 'The Computer Wins! Since, rock beats sciccors.';
  }

//Scissors Beats Paper
  if (userChoice === 'scissors' && computerChoice === 'paper')
  {
  return 'The User Wins! Since, sciccors beats paper.';
  }

  if (computerChoice === 'scissors' && userChoice === 'paper')
  {
    return 'The Comnputer Wins! Since, scissors beats paper.';
  }

//Paper Beats Rock
  if (userChoice === 'paper' && computerChoice === 'rock')
  {
    return 'The User Wins! Since, paper beats rock.';
  }

  if (computerChoice === 'paper' && userChoice === 'rock')
  {
   return 'The Comnputer Wins! Since, paper beats rock.';
  }

};

//Execute the Actual Game
const playGame = () =>
{
  //Hard Coded User Choice
  const userChoice = getUserChoice('rock');
  
  //Retreive Auto Generated Move for Computer
  const computerChoice = getComputerChoice();
  
  //Print Results
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();


