import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandom } from '../func';

const gameHeadline = 'Find the greatest common divisor of given numbers.';

const expectedAnswer = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return expectedAnswer(num2, num1 % num2);
};


const getRightAnswer = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const correctAnswer = expectedAnswer(num1, num2);
  const question = `${num1} ${num2}`;
  return cons(question, correctAnswer);
};

const playGcdGame = () => gameInterface(gameHeadline, getRightAnswer);

export default playGcdGame;