import { combineReducers } from "redux";

import postsReducer from "./redux/reducers/postsReducer";
import utilsReducer from "./redux/reducers/utilsReducer";
import authsReducer from "./redux/reducers/authsReducer";

const rootReducer = combineReducers({
	postsReducer,
	utilsReducer,
	authsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
