import * as types from "../../../constants/types";
import produce from "immer";

interface UserDataI {
	imageUrl?: string;
	name?: string;
	email?: string;
	_id?: string;
	googleId?: string;
}

interface AuthsInitialState {
	userData: UserDataI;
	token: string;
	checkAuthentication: undefined | boolean;
}

const initalState: AuthsInitialState = {
	userData: {},
	token: "",
	checkAuthentication: undefined,
};

const authsReducer = (state = initalState, action: any) =>
	produce(state, (draft: AuthsInitialState) => {
		switch (action.type) {
			case types.GET_USR_SUCCEEDED: {
				draft.userData = action.userData;
				break;
			}

			case types.SIGN_IN_WITH_GOOGLE_SUCCEEDED:
			case types.SIGN_IN_SUCCEEDED:
			case types.SIGN_UP_SUCCEEDED: {
				draft.userData = action.userData;
				draft.token = action.token;
				draft.checkAuthentication = true;
				break;
			}

			case types.LOG_OUT_SUCCEEDED: {
				draft.userData = {};
				draft.token = "";
				draft.checkAuthentication = false;
				break;
			}

			case types.CHECK_AUTHENTICATION_SUCCEEDED: {
				draft.checkAuthentication = true;
				draft.token = action.token;
				break;
			}
			case types.CHECK_AUTHENTICATION_FAILED: {
				draft.userData = {};
				draft.checkAuthentication = false;
				draft.token = "";
				break;
			}

			default:
				return draft;
		}
	});

export default authsReducer;
export type { AuthsInitialState, UserDataI };
