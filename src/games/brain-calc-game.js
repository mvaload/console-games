import { cons, car, cdr } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandomItem, getRandom } from '../libs';

const signsArray = ['+', '-', '*'];

const expectedAnswer = (num1, num2, sign) => {
  switch (String(sign)) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '*':
      return Number(num1) * Number(num2);
    default:
      return false;
  }
};

const gameHeadline = 'What is the result of the expression?';

const getRightAnswer = () => {
  const pairOfNumbers = cons(getRandom(), getRandom());
  const expression = cons(pairOfNumbers, getRandomItem(signsArray));
  const num1 = car(car(expression));
  const num2 = cdr(car(expression));
  const sign = cdr(expression);
  const correctAnswer = expectedAnswer(num1, num2, sign);
  const question = `${num1} ${sign} ${num2}`;
  return cons(question, correctAnswer);
};


const playCalcGame = () => gameInterface(gameHeadline, getRightAnswer);

export default playCalcGame;
