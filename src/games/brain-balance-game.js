import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandom } from '../libs';

const gameHeadline = 'Balance the given number.';

const getBalanceNumber = (number) => {
  const arr = String(number).split('').sort((a, b) => a - b);
  const length = arr.length - 1;
  const first = Number(arr[0]);
  const last = Number(arr[length]);
  if (last - first <= 1) {
    return arr.join('');
  }
  arr[0] = first + 1;
  arr[length] = last - 1;
  const result = Number(arr.join(''));

  return getBalanceNumber(result);
};


const getRightAnswer = () => {
  const number = getRandom(11, 999);
  const correctAnswer = getBalanceNumber(number);
  const question = `${number}`;
  return cons(question, correctAnswer);
};

const playBalanceGame = () => gameInterface(gameHeadline, getRightAnswer);

export default playBalanceGame;

