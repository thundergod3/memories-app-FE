import React, { Dispatch } from "react";
import { Link } from "react-router-dom";

import { AppBar, Avatar, Tooltip, Typography, Button, CircularProgress } from "@material-ui/core";

import memories from "../../../assets/memories.png";

import useStyles from "./style";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/rootReducer";
import authsAction from "../../../stores/redux/actions/authsAction";

const Navbar = (): JSX.Element => {
	const classes = useStyles();
	const {
		authsReducer: { userData, checkAuthentication },
	} = useSelector((state: RootState) => state);
	const { logoutRequest } = authsAction;
	const dispatch: Dispatch<any> = useDispatch();

	return (
		<AppBar className={classes.appBar} position="static" color="inherit">
			<div className={classes.brandContainer}>
				<Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
					Memories
				</Typography>
				<img src={memories} alt="memories" height="60" />
			</div>
			<Tooltip className={classes.toolbar} title="" style={checkAuthentication === true ? { flex: 0.3 } : {}}>
				{checkAuthentication === undefined ? (
					<CircularProgress />
				) : checkAuthentication === false ? (
					<Button variant="contained" className={classes.logout} color="primary" component={Link} to="/login">
						Sign In
					</Button>
				) : (
					<div className={classes.profile}>
						<Avatar className={classes.purple} alt={userData?.name} src={userData?.imageUrl}>
							{userData?.name?.charAt(0)}
						</Avatar>
						<Typography className={classes.username} variant="h6">
							{userData?.name}
						</Typography>
						<Button
							variant="contained"
							className={classes.logout}
							color="secondary"
							onClick={(): void => dispatch(logoutRequest())}>
							Logout
						</Button>
					</div>
				)}
			</Tooltip>
		</AppBar>
	);
};

export default Navbar;
