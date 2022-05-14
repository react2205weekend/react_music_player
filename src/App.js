import Header from './Header';
import Footer from './Footer';
import Content from './Content';

//컴포넌트 함수의 JSX를 생성하는 리턴문 안쪽에서는 연산이 필요한 모든 코드를 중괄호로 감싸줌 (주석)

function App(){
	return (
		<>
			<Header />
			{/* <Content /> */}
			<Footer />			
		</>
	)
}

export default App;


