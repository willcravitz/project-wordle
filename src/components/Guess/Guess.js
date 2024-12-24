import React from 'react';
import { range } from '../../utils';

const NUM_CELLS = 5;

function Guess({ word }) {
	return (
		<p className='guess'>
			{range(NUM_CELLS).map((num) => (
				<span key={num} className='cell'>
					{word?.[num]}
				</span>
			))}
		</p>
	);
}

export default Guess;
