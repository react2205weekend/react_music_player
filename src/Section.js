import Card from './Card';
import { useState } from 'react';

function Section() {
	const arr = [
		'Blizzards',
		'Calm',
		'Dusty_Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
		'Vespers',
	];
	const [count, setCount] = useState(0);

	return (
		<>
			<section
				style={{
					top: '140%',
					transform: `rotate(${(360 / arr.length) * count}deg)`,
				}}>
				{arr.map((item, idx) => {
					return <Card key={idx} item={item} index={idx} num={arr.length} />;
				})}
			</section>

			<a href='#' className='prev' onClick={() => setCount(count - 1)}></a>
			<a href='#' className='next' onClick={() => setCount(count + 1)}></a>
		</>
	);
}

export default Section;
