import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandom } from '../libs';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const expectedAnswer = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return expectedAnswer(num2, num1 % num2);
};


const gcdGame = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const gameGoal = expectedAnswer(num1, num2);
  const gameQuestion = `${num1} ${num2}`;
  return cons(gameQuestion, gameGoal);
};

const playGcdGame = () => gameInterface(gameTitle, gcdGame);

export default playGcdGame;