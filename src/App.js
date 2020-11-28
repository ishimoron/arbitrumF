import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/search" component={Search} />
			</Switch>
		</div>
	);
};

export default App;
