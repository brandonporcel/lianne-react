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

// (function (history) {
// 	var pushState = history.pushState;
// 	history.pushState = function (state) {
// 		// YOUR CUSTOM HOOK / FUNCTION
// 		console.log('I am called from pushStateHook');
// 		return pushState.apply(history, arguments);
// 	};
// })(window.history);
console.log(window.location.pathname, 'aaa');
function App() {
	useEffect(() => {
		let currentUrl = window.location.pathname;
		// https://itsopensource.com/how-to-call-a-function-on-URL-change-in-javascript/
		(function (history) {
			var pushState = history.pushState;
			history.pushState = function (state) {
				// currentUrl = window.location.pathname;
				console.log(window.location.pathname);
				// document.querySelector(
				// 	'title'
				// ).textContent = `Lianne La Havas . ${currentUrl}`;

				return pushState.apply(history, arguments);
			};
		})(window.history);
		// console.log(window.location.pathname);
	}, []);
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
