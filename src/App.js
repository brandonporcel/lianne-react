import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Videos from './components/Videos';
import Tour from './components/Tour';
import Merch from './components/Merch';
import SignUp from './components/SignUp';
function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/videos" component={Videos}></Route>
					<Route path="/tour">
						<Tour></Tour>
					</Route>
					<Route path="/merch">
						<Merch></Merch>
						merchhhhhh mercha2
					</Route>
					<Route path="/signup" component={SignUp}></Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
