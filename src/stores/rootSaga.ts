import { fork, all } from "redux-saga/effects";
import postsSaga from "./saga/postsSaga";

export default function* rootSaga() {
	yield all([fork(postsSaga)]);
}
