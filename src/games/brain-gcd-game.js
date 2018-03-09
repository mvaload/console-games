import { gcd, getRandom } from '../libs/math';

const putRiddleWithAnswer = () => {
  const min = 1;
  const max = 100;
  const intA = getRandom(min, max);
  const intB = getRandom(min, max);
  const riddle = `${intA} ${intB}`;
  const answer = `${gcd(intA, intB)}`;
  return [riddle, answer];
};

const rule = 'Find the greatest common divisor of given numbers.';

const riddlesWithAnswers = Array.from({ length: 3 }, putRiddleWithAnswer);

const brainGcdGame = {
  rule,
  riddlesWithAnswers,
};

export default brainGcdGame;