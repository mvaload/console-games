import { sayHello, startGame } from './libs';

const gameInterface = (gameHeadline, gamePlay) => {
  sayHello(`${gameHeadline}`);
  startGame(gameHeadline, gamePlay);
};

export default gameInterface;


