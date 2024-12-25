import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import LostBanner from '../LostBanner/LostBanner';
import WonBanner from '../WonBanner/WonBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	// one of 'progress', 'lost', 'won'
	const [status, setStatus] = React.useState('progress');

	function addGuess(guess) {
		const nextGuesses = [...guesses, guess];
		setGuesses(nextGuesses);
		if (guess === answer) {
			setStatus('won');
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setStatus('lost');
		}
	}

	return (
		<>
			<GuessList guesses={guesses} answer={answer} />
			<GuessInput status={status} addGuess={addGuess} />
			{status === 'lost' && <LostBanner answer={answer} />}
			{status === 'won' && <WonBanner numGuesses={guesses.length} />}
		</>
	);
}

export default Game;
