import { combineReducers } from "redux";

import postsReducer from "./redux/reducers/postsReducer";
import utilsReducer from "./redux/reducers/utilsReducer";

const rootReducer = combineReducers({
	postsReducer,
	utilsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
