import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);

	function addGuess(word) {
		const newGuess = {
			word,
			id: crypto.randomUUID(),
		};
		const nextGuesses = [...guesses, newGuess];
		setGuesses(nextGuesses);
	}

	return (
		<>
			<GuessInput addGuess={addGuess} />
			<GuessList guesses={guesses} />
		</>
	);
}

export default Game;
