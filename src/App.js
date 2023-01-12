import logo from './logo.svg';
import './style/App.css';
import Landing from './modules/Landing';
import Burger from './modules/Burger';
import NavBar from './modules/NavBar';
import Bio from './modules/Bio';
import WorkHis from './modules/WorkHis';
import Contact from './modules/Contact';

function App() {
	// let previousScroll = 0;
	// useEffect(() => {
	// 	document.getElementsByClassName('App-container')[0].onscroll = function() {
	// 		let curScroll = document.getElementsByClassName('App-container')[0].scrollTop;

	// 		if (curScroll < previousScroll) {
	// 			document.getElementById('navbar').style.top = '1em';
	// 			document.getElementById('burger').style.animation = 'offPage .4s 1 forwards';
	// 		} else {
	// 			document.getElementById('navbar').style.top = '-70px';
	// 			document.getElementById('burger').style.animation = 'onPage .5s 1 forwards';
	// 		}
	// 		previousScroll = curScroll;
	// 	};
	// });
	return (
		<div className="App-container">
			<NavBar />
			<Burger />
			<Landing />
			<Bio />
			<WorkHis />
			<Contact />
		</div>
	);
}

export default App;
