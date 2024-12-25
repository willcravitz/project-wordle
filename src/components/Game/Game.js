import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import LostBanner from '../LostBanner/LostBanner';
import WonBanner from '../WonBanner/WonBanner';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';

function Game() {
	const [answer, setAnswer] = React.useState(() => sample(WORDS));
	const [guess, setGuess] = React.useState('');
	const [guesses, setGuesses] = React.useState([]);
	// 'progress' | 'lost' | 'won'
	const [status, setStatus] = React.useState('progress');

	const checkedGuesses = guesses.map((guess) =>
		checkGuess(guess, answer)
	);

	function restart() {
		const newAnswer = sample(WORDS);
		setAnswer(newAnswer);
		setGuess('');
		setGuesses([]);
		setStatus('progress');
	}

	function addGuess() {
		const nextGuesses = [...guesses, guess];
		setGuesses(nextGuesses);
		if (guess === answer) {
			setStatus('won');
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setStatus('lost');
		}
	}

	function addLetter(letter) {
		if (status === 'progress' && guess.length <= 4) {
			const nextGuess = guess + letter;
			setGuess(nextGuess);
		}
	}

	return (
		<>
			<GuessList checkedGuesses={checkedGuesses} />
			<GuessInput
				status={status}
				guess={guess}
				setGuess={setGuess}
				addGuess={addGuess}
			/>
			<Keyboard
				checkedGuesses={checkedGuesses}
				addLetter={addLetter}
			/>
			{status === 'lost' && (
				<LostBanner answer={answer} restart={restart} />
			)}
			{status === 'won' && (
				<WonBanner numGuesses={guesses.length} restart={restart} />
			)}
		</>
	);
}

export default Game;
