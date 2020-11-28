import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './MainDrawer.css';


const useStyles = makeStyles({
	list: {
		width: 250,
	},

});

export default function MainDrawer() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List component="nav" aria-label="main mailbox folders">
				<ListItem button>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<NavLink to="/">Home</NavLink>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<PersonAddIcon />
					</ListItemIcon>
					<NavLink to="/registration">Registration</NavLink>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<NavLink to="/authorization">Authorization</NavLink>
				</ListItem>
			</List>
			<Divider />
		</div>
	);

	return (
		<div>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<IconButton onClick={toggleDrawer(anchor, true)}>
						<MenuIcon />
					</IconButton>
					<Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}
