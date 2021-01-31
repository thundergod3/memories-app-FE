import { GoogleLoginResponse } from "react-google-login";

import { UserDataI } from "../stores/redux/reducers/authsReducer";
import { PostItemI, PostListI } from "../stores/redux/reducers/postsReducer";

// POSTS TYPE
export const FETCH_POST_LIST_REQUEST: string = "FETCH_POST_LIST_REQUEST";
export const FETCH_POST_LIST_SUCCEEDED: string = "FETCH_POST_LIST_SUCCEEDED";

export const CREATE_POST_ITEM_REQUEST: string = "CREATE_POST_ITEM_REQUEST";
export const CREATE_POST_ITEM_SUCCEEDED: string = "CREATE_POST_ITEM_SUCCEEDED";

export const EDIT_POST_ITEM_REQUEST: string = "EDIT_POST_ITEM_REQUEST";
export const EDIT_POST_ITEM_SUCCEEDED: string = "EDIT_POST_ITEM_SUCCEEDED";

export const GET_POST_DETAIL: string = "GET_POST_DETAIL";

export const DELETE_POST_ITEM_REQUEST: string = "DELETE_POST_ITEM_REQUEST";
export const DELETE_POST_ITEM_SUCCEEDED: string = "DELETE_POST_ITEM_SUCCEEDED";

export const LIKE_POST_ITEM_REQUEST: string = "LIKE_POST_ITEM_REQUEST";
export const LIKE_POST_ITEM_SUCCEEDED: string = "LIKE_POST_ITEM_SUCCEEDED";

// AUTH TYPES
export const SIGN_IN_WITH_GOOGLE_REQUEST: string = "SIGN_IN_WITH_GOOGLE_REQUEST";
export const SIGN_IN_WITH_GOOGLE_SUCCEEDED: string = "SIGN_IN_WITH_GOOGLE_SUCCEEDED";

export const SIGN_IN_REQUEST: string = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCEEDED: string = "SIGN_IN_SUCCEEDED";

export const SIGN_UP_REQUEST: string = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCEEDED: string = "SIGN_UP_SUCCEEDED";

export const LOG_OUT_REQUEST: string = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCEEDED: string = "LOG_OUT_SUCCEEDED";

export const GET_USR_REQUEST: string = "GET_USR_REQUEST";
export const GET_USR_SUCCEEDED: string = "GET_USR_SUCCEEDED";

export const CHECK_AUTHENTICATION_REQUEST = "CHECK_AUTHENTICATION_REQUEST";
export const CHECK_AUTHENTICATION_SUCCEEDED = "CHECK_AUTHENTICATION_SUCCEEDED";
export const CHECK_AUTHENTICATION_FAILED = "CHECK_AUTHENTICATION_FAILED";

// UTILS TYPES
export const LOADING_UI: string = "LOADING_UI";
export const LOADED_UI: string = "LOADED_UI";

// INTERFACE POST ACTIONS
interface FetchPostListRequestI {
	type: typeof FETCH_POST_LIST_REQUEST;
}
interface FetchPostListSucceededI {
	type: typeof FETCH_POST_LIST_SUCCEEDED;
	postList: PostListI;
}

interface CreatePostItemRequestI {
	type: typeof CREATE_POST_ITEM_REQUEST;
	postItem: PostItemI;
}
interface CreatePostItemSucceededI {
	type: typeof CREATE_POST_ITEM_SUCCEEDED;
	postItem: PostItemI;
}

interface GetPostDetailI {
	type: typeof GET_POST_DETAIL;
	postId: string | undefined;
}

interface EditPostItemRequestI {
	type: typeof EDIT_POST_ITEM_REQUEST;
	postId: string | undefined;
	postEdit?: PostItemI;
}
interface EditPostItemSucceededI {
	type: typeof EDIT_POST_ITEM_SUCCEEDED;
	postId: string | undefined;
	postEdit?: PostItemI;
}

interface DeletePostItemRequestI {
	type: typeof DELETE_POST_ITEM_REQUEST;
	postId: string | undefined;
}
interface DeletePostItemSucceededI {
	type: typeof DELETE_POST_ITEM_SUCCEEDED;
	postId: string | undefined;
}

interface LikePostItemRequestI {
	type: typeof LIKE_POST_ITEM_REQUEST;
	postId: string | undefined;
}
interface LikePostItemSucceededI {
	type: typeof LIKE_POST_ITEM_SUCCEEDED;
	postId: string | undefined;
	postLike: PostItemI;
}

// INtERFACE AUTH ACTIONS
interface SignInWithGoogleRequestI {
	type: typeof SIGN_IN_WITH_GOOGLE_REQUEST;
	googleData: GoogleLoginResponse;
}
interface SignInWithGoogleSucceededI {
	type: typeof SIGN_IN_WITH_GOOGLE_SUCCEEDED;
	userData: any;
	token: string;
}

interface SignInRequestI {
	type: typeof SIGN_IN_REQUEST;
	formSignIn: any;
}
interface SignInSucceededI {
	type: typeof SIGN_IN_SUCCEEDED;
	userData: any;
	token: string;
}

interface SignUpRequestI {
	type: typeof SIGN_UP_REQUEST;
	formSignUp: any;
}
interface SignUpSucceededI {
	type: typeof SIGN_UP_SUCCEEDED;
	userData: any;
	token: string;
}

interface LogOutRequestI {
	type: typeof LOG_OUT_REQUEST;
}
interface LogOutSucceededI {
	type: typeof LOG_OUT_SUCCEEDED;
}

interface GetUserRequestI {
	type: typeof GET_USR_REQUEST;
	token: string;
}
interface GetUserSucceededI {
	type: typeof GET_USR_SUCCEEDED;
	userData: UserDataI;
}

interface CheckAuthenticationRequestI {
	type: typeof CHECK_AUTHENTICATION_REQUEST;
}
interface CheckAuthenticationSucceededI {
	type: typeof CHECK_AUTHENTICATION_SUCCEEDED;
	token: string;
}
interface CheckAuthenticationFailedI {
	type: typeof CHECK_AUTHENTICATION_FAILED;
}

// INtERFACE UTIL ACTIONS
interface LoadingUII {
	type: typeof LOADING_UI;
}
interface LoadedUII {
	type: typeof LOADED_UI;
}

// EXPORT POSTS TYPE
export type FetchPostListI = FetchPostListRequestI | FetchPostListSucceededI;
export type CreatePostItemI = CreatePostItemRequestI | CreatePostItemSucceededI;
export type EditPostItemI = EditPostItemRequestI | EditPostItemSucceededI;
export type DeletePostItemI = DeletePostItemRequestI | DeletePostItemSucceededI;
export type LikePostItemI = LikePostItemRequestI | LikePostItemSucceededI;
export type { GetPostDetailI };

// EXPORT AUTHS TYPE
export type SignInWithGoogleI = SignInWithGoogleRequestI | SignInWithGoogleSucceededI;
export type SignInI = SignInRequestI | SignInSucceededI;
export type SignUpI = SignUpRequestI | SignUpSucceededI;
export type LogOutI = LogOutRequestI | LogOutSucceededI;
export type GetUserI = GetUserRequestI | GetUserSucceededI;
export type CheckAuthenticationI =
	| CheckAuthenticationRequestI
	| CheckAuthenticationSucceededI
	| CheckAuthenticationFailedI;

// EXPORT UTILS TYPE
export type LoadUII = LoadingUII | LoadedUII;
