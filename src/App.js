import logo from './logo.svg';
import './style/App.css';
import Landing from './modules/Landing';
import Burger from './modules/Burger';
import NavBar from './modules/NavBar';
import Bio from './modules/Bio';
import WorkHis from './modules/WorkHis';
import Contact from './modules/Contact';

function App() {
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
