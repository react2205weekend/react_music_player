/*
	컴포넌트 함수는 한번에 하나의 JSX만 반환가능
	복수개의 요소를 반환할때에는 wrapping tag로 감싸줌
	불필요한 부모태그의 생성을 막기 위해서는 <></> (fragment)로 감싸줌
*/

function App(){
	return (
		<>
			<header>
				<h1>LOGO</h1>

				<a href="#">menu</a>
			</header>
			
			<footer>
				<p>2022 DCODELAB &copy; ALL RIGHTS RESERVED.</p>
			</footer>
		</>
	)
}

export default App;


