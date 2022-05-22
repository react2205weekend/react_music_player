import Card from './Card';

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

	return (
		<section style={{ top: '140%' }}>
			{arr.map((item, idx) => {
				return <Card key={idx} item={item} index={idx} num={arr.length} />;
			})}
		</section>
	);
}

export default Section;
