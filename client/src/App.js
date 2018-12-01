import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	dense: {
		marginTop: 19,
	},
	menu: {
		width: 200,
	},
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
});

const currencies = [
	{
		value: 'USD',
		label: '$',
	},
	{
		value: 'EUR',
		label: '€',
	},
	{
		value: 'BTC',
		label: '฿',
	},
	{
		value: 'JPY',
		label: '¥',
	},
];

class App extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="App parent_center">
				<div className={classes.root}>
					<Grid container spacing={8}>
						<Grid item xs={4}>
							<Paper className={classes.paper}>item</Paper>
						</Grid>
						<Grid item xs={4}>
							<Paper className={classes.paper}>item</Paper>
						</Grid>
						<Grid item xs={4}>
							<Paper className={classes.paper}>item</Paper>
						</Grid>
					</Grid>
				</div>
				<form noValidate autoComplete="off" className="child_center">
					<TextField
						label="Host"
						margin="normal"
					/>
					<TextField
						label="Port"
						margin="normal"
					/>
					<TextField
						label="db"
						margin="normal"
					/>
				</form>
			</div>
		);
	}
}

export default withStyles(styles)(App);
