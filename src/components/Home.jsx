import { useState } from 'react';
import axios from 'axios';
import './Home.css';
import logoSrc from '../assets/img/Logo.png';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import { Link, Redirect } from 'react-router-dom';
const Home = () => {
	const [state, setState] = useState({
		search: '',
	});

	const handleChange = (e) => {
		setState({ search: e.target.value });
	};

	const handleSubmit = (e) => {
		<Link to="/search"></Link>
	};
	console.log(state.search);

	// const Input = styled.input`

	// `
	return (
		<div className="home__container">
			<span className="home__header" />
			<div className="home__wrapper">
				<div className="logo">
					<img src={logoSrc} alt=""></img>
				</div>
				<span className="header__text">Арбитрум — это место решения конфликтов между бизнесом и клиентам.</span>
				<div className="search__wrapper">
					<form onSubmit={handleSubmit} className="search__form" action="/search">
						<input
							type="text"
							className="search__input"
							onChange={handleChange}
							placeholder="Введите номер или имя"
						/>
						<button type="submit" className="search__btn">
							<SearchIcon />
						</button>
					</form>
				</div>
				<div className="footer">
					<div className="footer__links">
						<a href="/">Список самых вредных редисок</a>
						<a href="/">Про проект <HelpIcon /></a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
