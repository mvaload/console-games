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

const gameTitle = 'What is the result of the expression?';

const calcGame = () => {
  const pairOfNumbers = cons(getRandom(), getRandom());
  const expression = cons(pairOfNumbers, getRandomItem(signsArray));
  const num1 = car(car(expression));
  const num2 = cdr(car(expression));
  const sign = cdr(expression);
  const gameGoal = expectedAnswer(num1, num2, sign);
  const gameQuestion = `${num1} ${sign} ${num2}`;
  return cons(gameQuestion, gameGoal);
};


const playCalcGame = () => gameInterface(gameTitle, calcGame);

export default playCalcGame;