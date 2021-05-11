import { useEffect } from 'react';
import Media from 'react-media';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
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
				<Switch>
					<Media query={`(max-width: 1024px)`}>
						{(matches) =>
							matches ? (
								<Route path="/" component={MobileHeader} />
							) : (
								<div>
									<Route exact path="/" component={Header} />
								</div>
							)
						}
					</Media>
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
