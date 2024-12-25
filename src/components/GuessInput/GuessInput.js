import React from 'react';

function GuessInput({ status, guess, setGuess, addGuess }) {
	function handleSubmit(event) {
		event.preventDefault();
		addGuess();
		setGuess('');
	}

	return (
		<form className='guess-input-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				id='guess-input'
				type='text'
				required
				disabled={status !== 'progress'}
				pattern='\w{5,5}'
				maxLength={5}
				value={guess}
				onChange={(event) => {
					setGuess(event.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default GuessInput;
