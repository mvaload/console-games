import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandom } from '../libs';

const gameTitle = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = () => {
  const number = getRandom();
  const gameGoal = number % 2 === 0 ? 'yes' : 'no';
  const gameQuestion = `${number}`;
  return cons(gameQuestion, gameGoal);
};

const playEvenGame = () => gameInterface(gameTitle, evenGame);

export default playEvenGame;