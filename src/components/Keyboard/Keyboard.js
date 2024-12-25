import React from 'react';

const KEYBOARD_ROWS = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
	['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
	['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function createLetterStatus(checkedGuesses) {
	const res = {};
	const rawLetterStatus = checkedGuesses.flat();
	rawLetterStatus.forEach(({ letter, status }) => {
		const currStatus = res[letter];
		if (currStatus === 'correct' && status === 'misplaced') {
			return;
		}
		res[letter] = status;
	});
	return res;
}

function Key({ letter, status, addLetter }) {
	const className = status ? `key ${status}` : 'key';
	return (
		<button className={className} onClick={() => addLetter(letter)}>
			{letter}
		</button>
	);
}

function Keyboard({ checkedGuesses, addLetter }) {
	const letterStatus = createLetterStatus(checkedGuesses);

	return (
		<div className='keyboard'>
			{KEYBOARD_ROWS.map((row, index) => (
				<div key={index} className={'keyboard-row'}>
					{row.map((letter) => (
						<Key
							key={letter}
							letter={letter}
							status={letterStatus[letter]}
							addLetter={addLetter}
						/>
					))}
				</div>
			))}
		</div>
	);
}

export default Keyboard;
