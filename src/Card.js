function Card({ item }) {
	//console.log(props);
	const path = process.env.PUBLIC_URL;

	return (
		<article>
			<div className='inner'>
				<div className='pic'>
					<img src={`${path}/img/${item}.jpg`} alt={item} />
				</div>
				<h2>{item}</h2>
			</div>
		</article>
	);
}

export default Card;
