import './Search.css';
import { useState } from 'react';
import Logo from '../assets/img/Logo.png';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import HelpIcon from '@material-ui/icons/Help';

const Search = () => {
	const [state, setState] = useState({
		inputValue: '',
	});
	const searchHandler = (e) => {
		setState({
			inputValue: e.target.value,
		});
	};

	return (
		<div className="search__container">
			<div className="search__header">
				<div className="logo__header">
					<img src={Logo} alt="Logo" />
				</div>
				<div className="search__box">
					<input type="text" placeholder="Петров" value={state.inputValue} onChange={searchHandler} />
					<span className="search__box-Sicon">
						<SearchIcon />
					</span>
					<span className="search__box-Cicon">{!state.inputValue ? <CloseIcon /> : null}</span>
				</div>
			</div>
			<div className="search-wrapper">
				<div className="search__text">
					<p>Опа, здрасте. Мы обнаружили 2-х Петровых</p>
				</div>
				<div className="search__card" onClick={()=> {
                    window.location.href='/search/1'
                }}>
					<div className="card__title">
						<p>Иван Петров</p>
					</div>
					<div className="card__subtitle">
						<p>+380 66 xxx xx 87</p>
					</div>
					<div className="card__situation">
						<p>Ситуаций: 2 </p>
					</div>
					<div className="card__decision">
						<p>Решено: 1</p>
					</div>
				</div>
				<div className="search__card-2">
					<div className="card__title">
						<p>Георгий Петров</p>
					</div>
					<div className="card__subtitle">
						<p>+380 99 xxx xx 44</p>
					</div>
					<div className="card__situation">
						<p>Ситуаций: 243 </p>
					</div>
					<div className="card__decision">
						<p>Решено: 0</p>
					</div>
				</div>
			</div>
			<div className="footer">
				<div className="footer__links">
					<a href="/">Список самых вредных редисок</a>
					<a href="/">
						Про проект <HelpIcon />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Search;
