import { randomNumber, createGameFlow } from '../index.js';

const askSum = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();

  console.log(`Question: ${number1} + ${number2}`);

  return (number1 + number2).toString();
};

const askDifference = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();

  console.log(`Question: ${number1} - ${number2}`);

  return (number1 - number2).toString();
};

const askMultiply = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();

  console.log(`Question: ${number1} * ${number2}`);

  return (number1 * number2).toString();
};

const askQuestion = () => {
  const determiner = randomNumber() % 3;
  return [askSum, askDifference, askMultiply][determiner]();
};

const game = createGameFlow(askQuestion, 'What is the result of the expression?');

export default game;
