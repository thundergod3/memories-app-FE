import React, { Dispatch, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./stores/rootReducer";
import postsAction from "./stores/redux/actions/postsAction";
import authsAction from "./stores/redux/actions/authsAction";
import utilsAction from "./stores/redux/actions/utilsAction";

import "./App.scss";
import { Container } from "@material-ui/core";

import Homepage from "./pages/memories/Homepage";
import LoginPage from "./pages/auths/LoginPage";
import SignUpPage from "./pages/auths/SignUpPage";

import Navbar from "./components/layouts/Navbar";

const App = (): JSX.Element => {
	const {
		authsReducer: { checkAuthentication },
	} = useSelector((state: RootState) => state);
	const { fetchPostListRequest } = postsAction;
	const { loadingUI } = utilsAction;
	const { checkAuthenticaionRequest } = authsAction;
	const dispatch: Dispatch<any> = useDispatch();

	useEffect(() => {
		dispatch(loadingUI());
		dispatch(fetchPostListRequest());
	}, []);

	useEffect(() => {
		dispatch(checkAuthenticaionRequest());
	}, [checkAuthentication]);

	return (
		<Container maxWidth="lg">
			<Navbar />
			<Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/login" exact component={LoginPage} />
				<Route path="/signup" exact component={SignUpPage} />
			</Switch>
		</Container>
	);
};

export default App;
