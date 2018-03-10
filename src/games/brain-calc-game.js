import { cons } from 'hexlet-pairs';
import gameInterface from '..';
import { getRandom } from '../func';

const gameHeadline = 'What is the result of the expression?';

const getRightAnswer = () => {
  const operators = ['+', '-', '*'];
  const currentOperator = operators[getRandom(0, operators.length - 1)];
  const a = getRandom(1, 20);
  const b = getRandom(1, 20);

  const expectedAnswer = (operator) => {
    if (operator === '+') return a + b;
    else if (operator === '-') return a - b;
    return a * b;
  };

  const question = `${a} ${currentOperator} ${b}`;
  const correctAnswer = String(expectedAnswer(currentOperator));
  
  return cons (question, correctAnswer);
};
const playCalcGame = () => gameInterface(gameHeadline, getRightAnswer);
export default playCalcGame;
