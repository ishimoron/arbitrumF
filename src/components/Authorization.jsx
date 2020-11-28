import { useState } from 'react';
import { Paper, Grid, Button, TextField, CssBaseline, Typography } from '@material-ui/core';
import API from '../utils/API';

const Authorization = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const handleSubmit = () => {
		// API.post('/create', {
		//     phone: '',
		//     name: ''
		// })
		// 	.then(function (response) {
		// 		console.log(response);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
		alert('well done', data);
	};

	const handleEmail = (e) => {
		setData({
			email: e.target.value,
		});
	};

	const handlePassword = (e) => {
		setData({
			password: e.target.value,
		});
	};

	return (
		<div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
			<form onSubmit={handleSubmit}>
				<CssBaseline />
				<Typography variant="h4" align="center" component="h1" gutterBottom>
					🚀 Authorization User
				</Typography>
				<Paper style={{ padding: 20 }}>
					<Grid container alignItems="flex-start" spacing={2}>
						<Grid item xs={12}>
							<TextField
								name="email"
								fullWidth
								type="email"
								label="Email"
								onChange={handleEmail}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="password"
								fullWidth
								type="password"
								label="Password"
								required
								onChange={handlePassword}
							/>
						</Grid>

						<Grid item xs={12} style={{ marginTop: 16 }}>
							<Button variant="contained" color="primary" type="submit" fullWidth>
								Submit
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</form>
		</div>
	);
};

export default Authorization;
