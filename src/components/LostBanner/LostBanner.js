import React from 'react';
import Banner from '../Banner/Banner';

function LostBanner({ answer, restart }) {
	return (
		<Banner
			type='sad'
			action={restart}
			actionText={'Click here to restart!'}
		>
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</Banner>
	);
}

export default LostBanner;
