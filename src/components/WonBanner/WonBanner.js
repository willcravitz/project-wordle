import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ numGuesses, restart }) {
	return (
		<Banner
			type='happy'
			action={restart}
			actionText={'Click here to restart!'}
		>
			<p>
				<strong>Congratulations!</strong> Got it in{' '}
				<strong>
					{numGuesses <= 1 ? '1 guess' : `${numGuesses} guesses`}
				</strong>
				.
			</p>
		</Banner>
	);
}

export default WonBanner;
