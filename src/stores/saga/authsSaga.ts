import { takeLatest, call, put } from "redux-saga/effects";

import * as types from "../../constants/types";
import { UserDataI } from "../redux/reducers/authsReducer";
import authsAction from "../redux/actions/authsAction";

import axios, { AxiosResponse } from "axios";
import HTTPMethod from "../../services";
import authsService from "../../services/authsService";

import cookieLocal from "../../helpers/cookieLocal";
import decoded from "jwt-decode";
import utilsAction from "../redux/actions/utilsAction";

function* getUser({ token }: any) {
	try {
		yield call(HTTPMethod.attachTokenToHeader, { token });
		// yield (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`);
		const {
			data: { userData },
		}: AxiosResponse = yield call(authsService.getUser);

		yield put(authsAction.getUserSucceeded(userData));
	} catch (error) {
		console.log(error);
		return error?.response?.status;
	}
}

function* signInWithGoogle({ googleData }: any) {
	try {
		const userData: UserDataI = googleData.profileObj;
		const token: string = googleData?.tokenId;

		yield put(authsAction.signInWithGoogleSucceeded(userData, token));
	} catch (error) {
		console.log(error);
	}
}

function* signIn({ formSignIn }: any) {
	try {
		const {
			data: { userData, token },
		}: AxiosResponse = yield call(authsService.signin, { formSignIn });

		yield cookieLocal.saveToLocal("token", token);
		yield put(authsAction.SignInSucceeded(userData, token));
		yield put(utilsAction.loadedUI());
	} catch (error) {
		console.log(error);
	}
}

function* signUp({ formSignUp }: any) {
	try {
		const {
			data: { userData, token },
		}: AxiosResponse = yield call(authsService.signup, { formSignUp });

		yield cookieLocal.saveToLocal("token", token);
		yield put(authsAction.signUpSucceeded(userData, token));
		yield put(utilsAction.loadedUI());
	} catch (error) {
		console.log(error);
	}
}

function* logout() {
	yield cookieLocal.removeFromLocal("token");
	yield (axios.defaults.headers.common["Authorization"] = null);
	yield put(authsAction.logoutSucceeded());
}

function* checkAuthentication() {
	const token: string = yield cookieLocal.getFromLocal("token");
	const statusCode: number = yield call(getUser, { token });

	if (statusCode === 401 || !token) {
		yield call(logout);
	} else {
		const decodedToken: any = decoded(token);

		if (decodedToken.exp * 1000 < new Date().getTime()) {
			yield call(logout);
		} else {
			yield put(authsAction.checkAuthenticationSucceeded(token));
		}
	}
}

export default function* authsSaga() {
	yield takeLatest(types.SIGN_IN_WITH_GOOGLE_REQUEST, signInWithGoogle);

	// AUTHS
	yield takeLatest(types.SIGN_UP_REQUEST, signUp);
	yield takeLatest(types.SIGN_IN_REQUEST, signIn);
	yield takeLatest(types.LOG_OUT_REQUEST, logout);
	yield takeLatest(types.GET_USR_REQUEST, getUser);
	yield takeLatest(types.CHECK_AUTHENTICATION_REQUEST, checkAuthentication);
}
