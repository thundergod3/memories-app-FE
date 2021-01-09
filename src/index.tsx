import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";

import { Provider } from "react-redux";
import store from "./stores/configureStore";

import App from "./App";

import history from "./constants/history";

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
