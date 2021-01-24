import * as types from "../../../constants/types";
import produce from "immer";

interface UtilsInitialState {
	loading: boolean;
}

const initalState: UtilsInitialState = {
	loading: false,
};

const utilsReducer = (state = initalState, action: any) =>
	produce(state, (draft: UtilsInitialState) => {
		switch (action.type) {
			case types.LOADING_UI: {
				draft.loading = true;
				break;
			}
			case types.LOADED_UI: {
				draft.loading = false;
				break;
			}

			default:
				return draft;
		}
	});

export default utilsReducer;
export type { UtilsInitialState };
