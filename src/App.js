import { useEffect } from 'react';
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
	useEffect(() => {
		let currentUrl = window.location.pathname;
		// https://itsopensource.com/how-to-call-a-function-on-URL-change-in-javascript/
		(function (history) {
			var pushState = history.pushState;

			history.pushState = function (state) {
				currentUrl = window.location.pathname;
				document.querySelector(
					'title'
				).textContent = `Lianne La Havas${currentUrl}+1`;

				return pushState.apply(history, arguments);
			};
		})(window.history);
	}, []);
	return (
		<>
			<Router>
				<Header></Header>
				<Switch>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/`}
						component={Home}
					></Route>
					<Route
						path={`${process.env.PUBLIC_URL}/videos`}
						component={Videos}
					></Route>
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
