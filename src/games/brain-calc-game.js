import { getRandom } from '../libs/math';

const putRiddleWithAnswer = () => {
  const variant = getRandom(1, 3);
  const arg1 = getRandom(1, 100);
  const arg2 = getRandom(1, 100);
  let riddle;
  let answer;
  switch (variant) {
    case 1:
      riddle = `${arg1} * ${arg2}`;
      answer = `${arg1 * arg2}`;
      break;
    case 2:
      riddle = `${arg1} - ${arg2}`;
      answer = `${arg1 - arg2}`;
      break;
    case 3:
      riddle = `${arg1} + ${arg2}`;
      answer = `${arg1 + arg2}`;
      break;
    default:
      break;
  }
  return [riddle, answer];
};

const rule = 'What is the result of the expression?';

const riddlesWithAnswers = Array.from({ length: 3 }, putRiddleWithAnswer);

const brainCalcGame = {
  rule,
  riddlesWithAnswers,
};

export default brainCalcGame;