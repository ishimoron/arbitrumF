import { useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
	const [state, setState] = useState({
		search: '',
	});

	const handleChange = (e) => {
		setState({ search: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios.post('', {state})
	};
	console.log(state.search);
	return (
		<div className="home__container">
			<div className="home__title">
				<p>Arbitrum</p>
			</div>
			<div className="App">
				<form onSubmit={handleSubmit}>
					<input type="text" onChange={handleChange} />
                    <button type="submit">search!</button>
				</form>
			</div>
			<pre>{state.search}</pre>
		</div>
	);
};

export default Home;
