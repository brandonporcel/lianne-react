import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Videos from './components/Videos';
import Tour from './components/Tour';
import Merch from './components/Merch';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
function App() {
	return (
		<>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/videos" component={Videos}></Route>
					<Route path="/tour" component={Tour}></Route>
					<Route path="/merch" component={Merch}></Route>
					<Route path="/signup" component={SignUp}></Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</>
	);
}

export default App;
