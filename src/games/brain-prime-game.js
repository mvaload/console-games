import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandom } from '../libs';

const gameHeadline = 'Is this number prime?';

const checkNumberPrime = (number, step = 2) => {
  if (number < 2) {
    return false;
  }
  if (number % step === 0) {
    return false;
  }
  if (step >= number / 2) {
    return true;
  }
  return checkNumberPrime(number, step + 1);
};

const getRightAnswer = () => {
  const number = getRandom();
  const correctAnswer = checkNumberPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return cons(question, correctAnswer);
};


const playPrimeGame = () => gameInterface(gameHeadline, getRightAnswer);

export default playPrimeGame;