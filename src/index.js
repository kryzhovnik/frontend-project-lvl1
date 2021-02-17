import readlineSync from 'readline-sync';

const MAX_ATTEMPTS = 3;
const MAX_NUMBER = 100;

const randomNumber = (max = MAX_NUMBER) => Math.floor(Math.random() * Math.floor(max));

const createGameFlow = (askQuestion, rules) => ((userName) => {
  let correctAnswersCount = 0;

  console.log(rules);

  while (correctAnswersCount < MAX_ATTEMPTS) {
    const correctAnswer = askQuestion();
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
});

export { randomNumber, createGameFlow };
