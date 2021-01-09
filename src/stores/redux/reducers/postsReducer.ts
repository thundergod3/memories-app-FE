import * as types from "../../../constants/types";
import produce from "immer";

interface PostItemI {
	_id?: string;
	creator?: string;
	title?: string;
	message?: string;
	tags?: any;
	selectedFile?: string;
	createdAt?: Date;
	likeCount?: number;
}

type PostListI = Array<PostItemI>;

interface PostsInitialState {
	postList: PostListI;
	postDetail: PostItemI | any;
}

const initalState: PostsInitialState = {
	postList: [],
	postDetail: {},
};

const postsReducer = (state = initalState, action: any) =>
	produce(state, (draft: PostsInitialState) => {
		switch (action.type) {
			case types.FETCH_POST_LIST_SUCCEEDED: {
				draft.postList = action.postList;
				break;
			}

			case types.CREATE_POST_ITEM_SUCCEEDED: {
				draft.postList.push(action.postItem);
				break;
			}

			case types.GET_POST_DETAIL: {
				const tempPostDetail: PostItemI | any = draft.postList.find(
					(item: PostItemI): boolean => item._id === action.postId
				);

				draft.postDetail = { ...tempPostDetail, tags: tempPostDetail.tags.join(",") };
				break;
			}

			case types.EDIT_POST_ITEM_SUCCEEDED: {
				draft.postList = draft.postList.map(
					(postItem: PostItemI): PostItemI => (postItem._id === action.postId ? action.postEdit : postItem)
				);
				draft.postDetail = {};
				break;
			}

			case types.DELETE_POST_ITEM_REQUEST: {
				draft.postList = draft.postList.filter(
					(postItem: PostItemI): boolean => postItem._id !== action.postId
				);
				break;
			}

			case types.LIKE_POST_ITEM_SUCCEEDED: {
				draft.postList = draft.postList.map(
					(postItem: PostItemI | any): PostItemI => {
						if (postItem._id === action.postId) {
							return {
								...postItem,
								likeCount: postItem?.likeCount + 1,
							};
						} else return postItem;
					}
				);
				break;
			}

			default:
				return draft;
		}
	});

export default postsReducer;
export type { PostsInitialState, PostListI, PostItemI };
