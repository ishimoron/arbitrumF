import './UserInfo.css';
import Logo from '../assets/img/Logo.png';
import Card from '../assets/img/card.png'
import SecondCard from '../assets/img/card2.png'
const UserInfo = () => {
	return (
		<div className="user__container">
			<div className="user__header">
				<div className="logo__header">
					<img src={Logo} alt="Logo" />
				</div>
			</div>
			<div className="user__wrapper">
				<div className="user__sidebar">
					<div className="sidebar__text">
						<div className="sidebar__title">Иван Петров</div>
						<div className="sidebar__subtitle">+380 66 555 33 87</div>
						<div className="sidebar__situation">Ситуаций: 2</div>
						<div className="sidebar__decision">Решено: 1</div>
					</div>
				</div>
				<div className="user__content">
					<div className="user__card">
						<img src={Card} alt="" />
					</div>
					<div className="user__card-section">
						<img src={SecondCard} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
