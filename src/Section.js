import Card from './Card';
import Btns from './Btns';
import { useRef } from 'react';

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
	//sec라는 변수에 section요소를 참조해서 담음
	const sec = useRef(null);

	return (
		<>
			<section ref={sec} style={{ top: '140%' }}>
				{arr.map((item, idx) => {
					return <Card key={idx} item={item} index={idx} num={arr.length} />;
				})}
			</section>

			{/* 참조된 객체를 자식 컴포넌트로 전달 */}
			<Btns sec={sec} num={arr.length} />
		</>
	);
}

export default Section;
