import { fork, all } from "redux-saga/effects";

import authsSaga from "./saga/authsSaga";
import postsSaga from "./saga/postsSaga";

export default function* rootSaga() {
	yield all([fork(postsSaga), fork(authsSaga)]);
}
