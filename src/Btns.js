import { useState, useEffect } from 'react';

function Btns({ sec, num }) {
	console.log(sec);
	const [count, setCount] = useState(0);

	//prop으로 전달받은 객체를 회전시키는 함수를 정의
	const rotation = () => {
		sec.current.style.transform = `rotate(${(360 / num) * count}deg)`;
	};

	//count state값이 변경될때마다 rotation함수 호출
	useEffect(() => {
		if (sec !== null) rotation();
	}, [count]);

	return (
		<nav>
			<a href='#' className='prev' onClick={() => setCount(count - 1)}></a>
			<a href='#' className='next' onClick={() => setCount(count + 1)}></a>
		</nav>
	);
}

export default Btns;
