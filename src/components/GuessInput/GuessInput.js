import React from 'react';

function GuessInput({ addGuess }) {
	const [guess, setGuess] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		addGuess(guess);
		setGuess('');
	}

	return (
		<form className='guess-input-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				id='guess-input'
				type='text'
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
