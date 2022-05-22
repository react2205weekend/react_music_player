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
		<section>
			{arr.map((item, idx) => {
				return <Card key={idx} item={item} />;
			})}
		</section>
	);
}

export default Section;
