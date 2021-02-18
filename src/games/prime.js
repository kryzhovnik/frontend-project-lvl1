import { randomNumber, createGameFlow } from '../index.js';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const askQuestion = () => {
  const number = randomNumber();

  console.log(`Question: ${number}`);

  return (isPrime(number) ? 'yes' : 'no');
};

const game = createGameFlow(askQuestion, 'Answer "yes" if given number is prime. Otherwise answer "no".');

export default game;
