import * as types from "../../../constants/types";

import { GoogleLoginResponse } from "react-google-login";

import { UserDataI } from "../reducers/authsReducer";

class AuthsAction {
	signInWithGoogleRequest = (googleData: GoogleLoginResponse): types.SignInWithGoogleI => {
		return {
			type: types.SIGN_IN_WITH_GOOGLE_REQUEST,
			googleData,
		};
	};
	signInWithGoogleSucceeded = (userData: UserDataI, token: string): types.SignInWithGoogleI => {
		return {
			type: types.SIGN_IN_WITH_GOOGLE_REQUEST,
			userData,
			token,
		};
	};

	signInRequest = (formSignIn: any): types.SignInI => {
		return {
			type: types.SIGN_IN_REQUEST,
			formSignIn,
		};
	};
	SignInSucceeded = (userData: UserDataI, token: string): types.SignInI => {
		return {
			type: types.SIGN_IN_SUCCEEDED,
			userData,
			token,
		};
	};

	signUpRequest = (formSignUp: any): types.SignUpI => {
		return {
			type: types.SIGN_UP_REQUEST,
			formSignUp,
		};
	};
	signUpSucceeded = (userData: UserDataI, token: string): types.SignUpI => {
		return {
			type: types.SIGN_UP_SUCCEEDED,
			userData,
			token,
		};
	};

	logoutRequest = (): types.LogOutI => {
		return {
			type: types.LOG_OUT_REQUEST,
		};
	};
	logoutSucceeded = (): types.LogOutI => {
		return {
			type: types.LOG_OUT_SUCCEEDED,
		};
	};

	getUserRequest = (token: string): types.GetUserI => {
		return {
			type: types.GET_USR_REQUEST,
			token,
		};
	};
	getUserSucceeded = (userData: UserDataI): types.GetUserI => {
		return {
			type: types.GET_USR_SUCCEEDED,
			userData,
		};
	};

	checkAuthenticaionRequest = (): types.CheckAuthenticationI => {
		return {
			type: types.CHECK_AUTHENTICATION_REQUEST,
		};
	};
	checkAuthenticationSucceeded = (token: string): types.CheckAuthenticationI => {
		return {
			type: types.CHECK_AUTHENTICATION_SUCCEEDED,
			token,
		};
	};
	checkAuthenticationFailed = (): types.CheckAuthenticationI => {
		return {
			type: types.CHECK_AUTHENTICATION_FAILED,
		};
	};
}

export default new AuthsAction();
