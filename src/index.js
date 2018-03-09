import readlineSync from 'readline-sync';

const playGame = () => {
	const isEven = i => i % 2 === 0;

	const getRandom = (min, max) => {
	  let rand = min - 0.5 + Math.random() * (max - min + 1);
	    rand = Math.round(rand);
	    return rand;
	  };
	const getGameResult = () => {
		const minInt = 0;
		const maxInt = 100;
		
		    for(let i = 3; i > 0; i -= 1){
			const int = getRandom(minInt, maxInt);
			const riddle = `${int}`;
			const correctAnswer = isEven(int) ? 'yes' : 'no';
			const playerAnswer = readlineSync.question(`Question: ${riddle}\n`);
			if (playerAnswer === correctAnswer) {
		   		console.log(`Your answer: ${playerAnswer}`);
		    	console.log('Correct!');
			} else {
				return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!\n`);
			}
		}
		return console.log(`Congratulations, ${playerName}!\n`); 
	}      	      	
	console.log('Welcome to the Brain Games!');
	console.log('Answer "yes" if number even otherwise answer "no".\n');
	const playerName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${playerName}!\n`);
	getGameResult();  	
};
export default playGame;