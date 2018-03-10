import { sayHello, startGame } from './libs';

const gameInterface = (gameTitle, gamePlay) => {
  sayHello(`${gameTitle}`);
  startGame(gameTitle, gamePlay);
};

export default gameInterface;
