import * as types from "../../../constants/types";
import produce from "immer";

interface UtilsInitialState {}

const initalState: UtilsInitialState = {};

const utilsReducer = (state = initalState, action: any) =>
	produce(state, (draft: UtilsInitialState) => {
		switch (action.type) {
			default:
				return draft;
		}
	});

export default utilsReducer;
export type { UtilsInitialState };
