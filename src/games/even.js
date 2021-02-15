import { randomNumber, createGameFlow } from '../index.js';

const isEven = (value) => !(value % 2);

const askQuestion = () => {
  const number = randomNumber();

  console.log(`Question: ${number}`);

  return (isEven(number) ? 'yes' : 'no');
};

const game = createGameFlow(askQuestion, 'Answer "yes" if the number is even, otherwise answer "no".');

export default game;
