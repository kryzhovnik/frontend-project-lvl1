import readlineSync from 'readline-sync';

const MAX_NUMBER = 100;

const play = (userName) => {
  let correctAnswersCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswersCount < 3) {
    const correctAnswer = askQuestion(MAX_NUMBER);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    };
  }

  console.log(`Congratulations, ${userName}!`);
};

const askQuestion = (max) => {
  const number = Math.floor(Math.random() * Math.floor(max));
  console.log(`Question: ${number}`)
  return (isEven(number) ? "yes" : "no");
};

const isEven = (value) => !(value % 2);

export default play;
