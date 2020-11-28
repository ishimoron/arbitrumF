import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Registration from './components/Registration';
import MainDrawer from './components/MainDrawer';
import Authorization from './components/Authorization';

const App = () => {
	return (
		<div>
			<div style={{ position: 'absolute', zIndex: 1 }}>
				<MainDrawer />
			</div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/search" component={Search} />
				<Route path="/registration" component={Registration} />
				<Route path="/authorization" component={Authorization} />
			</Switch>
		</div>
	);
};

export default App;
