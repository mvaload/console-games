import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandom } from '../libs';

const gameHeadline = 'Answer "yes" if number even otherwise answer "no".';

const getRightAnswer = () => {
  const number = getRandom();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const question = `${number}`;
  return cons(question, correctAnswer);
};

const playEvenGame = () => gameInterface(gameHeadline, getRightAnswer);

export default playEvenGame;


