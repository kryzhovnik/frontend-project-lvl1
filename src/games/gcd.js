import { randomNumber, createGameFlow } from '../index.js';
import gcd from '../gcd.js';

const askQuestion = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();

  console.log(`Question: ${number1} ${number2}`);

  return gcd(number1, number2).toString();
};

const game = createGameFlow(askQuestion, 'Find the greatest common divisor of given numbers.');

export default game;
