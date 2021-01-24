import { AxiosResponse } from "axios";
import { SagaIterator } from "redux-saga";
import { takeEvery, takeLatest, call, put } from "redux-saga/effects";

import postServices from "../../services/postsService";

import * as types from "../../constants/types";
import postsAction from "../redux/actions/postsAction";
import utilsAction from "../redux/actions/utilsAction";

import { PostItemI, PostListI } from "../redux/reducers/postsReducer";

function* fetchPostList() {
	try {
		const { data }: AxiosResponse = yield call<any>(postServices.fetchPostList);
		yield put(postsAction.fetchPostListSucceeded(data));
		yield put(utilsAction.loadedUI());
	} catch (error) {
		console.log(error);
	}
}

function* createPostItem({ postItem }: types.CreatePostItemI) {
	try {
		yield put(postsAction.createPostItemSucceeded(postItem));
		yield call<any>(postServices.createPostItem, { postItem });
	} catch (error) {
		console.log(error);
	}
}

function* editPostItem({ postId, postEdit }: types.EditPostItemI) {
	try {
		yield put(postsAction.editPostItemSucceeded(postId, postEdit));
		yield call<any>(postServices.editPostItem, { postId, postEdit });
	} catch (error) {
		console.log(error);
	}
}

function* deletePostItem({ postId }: types.DeletePostItemI) {
	try {
		yield put(postsAction.deletePostItemSucceeded(postId));
		yield call<any>(postServices.deletePostItem, { postId });
	} catch (error) {
		console.log(error);
	}
}

function* likePostItem({ postId }: types.LikePostItemI) {
	try {
		const { data }: AxiosResponse = yield call<any>(postServices.likePostItem, { postId });
		yield put(postsAction.likePostItemSucceeded(postId, data));
	} catch (error) {
		console.log(error);
	}
}

export default function* postsSaga() {
	yield takeLatest(types.FETCH_POST_LIST_REQUEST, fetchPostList);
	yield takeLatest(types.CREATE_POST_ITEM_REQUEST, createPostItem);
	yield takeLatest(types.EDIT_POST_ITEM_REQUEST, editPostItem);
	yield takeLatest(types.DELETE_POST_ITEM_REQUEST, deletePostItem);
	yield takeLatest(types.LIKE_POST_ITEM_REQUEST, likePostItem);
}
