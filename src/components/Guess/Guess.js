import React from 'react';
import { range } from '../../utils';

const NUM_CELLS = 5;

function Cell({ letter, status }) {
	const className = status ? `cell ${status}` : 'cell';
	return <span className={className}>{letter}</span>;
}

function Guess({ checkedGuess }) {
	return (
		<p className='guess'>
			{range(NUM_CELLS).map((num) => (
				<Cell
					key={num}
					letter={checkedGuess?.[num].letter}
					status={checkedGuess?.[num].status}
				/>
			))}
		</p>
	);
}

export default Guess;
