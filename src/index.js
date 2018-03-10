import { sayHello, startGame } from './func';

const gameInterface = (gameHeadline, gamePlay) => {
  sayHello(`${gameHeadline}`);
  startGame(gameHeadline, gamePlay);
};

export default gameInterface;


