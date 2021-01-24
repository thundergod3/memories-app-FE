import * as types from "../../../constants/types";

class utilsAution {
	loadingUI = (): types.LoadUII => {
		return {
			type: types.LOADING_UI,
		};
	};
	loadedUI = (): types.LoadUII => {
		return {
			type: types.LOADED_UI,
		};
	};
}

export default new utilsAution();
