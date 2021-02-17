import { randomNumber, createGameFlow } from '../index.js';

const askQuestion = () => {
  const count = randomNumber(5) + 5;
  const step = randomNumber(5) + 1;
  const begin = randomNumber();
  const numbers = [...Array(count)].map((v, i) => begin + i * step).map((v) => v.toString());

  const missedNumberIndex = randomNumber(count);
  const missedNumber = numbers[missedNumberIndex];
  numbers[missedNumberIndex] = '..';

  console.log(`Question: ${numbers.join(' ')}`);

  return missedNumber;
};

const game = createGameFlow(askQuestion, 'What number is missing in the progression?');

export default game;
