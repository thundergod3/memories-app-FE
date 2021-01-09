import React, { Dispatch, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import postsAction from "./stores/redux/actions/postsAction";

import "./App.scss";

import Homepage from "./pages/Homepage";

const App = (): JSX.Element => {
	const { fetchPostListRequest } = postsAction;
	const dispatch: Dispatch<any> = useDispatch();

	useEffect(() => {
		dispatch(fetchPostListRequest());
	}, []);

	return (
		<Switch>
			<Route path="/" component={Homepage} />
		</Switch>
	);
};

export default App;
