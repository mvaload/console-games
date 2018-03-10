import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandom } from '../func';

const gameHeadline = 'What number is missing in this progression?';

const createProgression = () => {
  let number = getRandom();
  const step = getRandom(1, 10);
  const digits = [number];
  for (let i = 0; i < 9; i += 1) {
    digits.push(number += step);
  }
  return digits;
};

const getRightAnswer = () => {
  const quest = getRandom(1, 10);
  const expression = createProgression();
  const correctAnswer = expression[quest];
  expression[quest] = '..';
  const question = `${expression}`;
  return cons(question, correctAnswer);
};

const playProgressionGame = () => gameInterface(gameHeadline, getRightAnswer);

export default playProgressionGame;