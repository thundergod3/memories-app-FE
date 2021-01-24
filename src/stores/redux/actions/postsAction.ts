import * as types from "../../../constants/types";

import { PostItemI, PostListI } from "../reducers/postsReducer";

class postsAction {
	fetchPostListRequest = (): types.FetchPostListI => {
		return {
			type: types.FETCH_POST_LIST_REQUEST,
		};
	};
	fetchPostListSucceeded = (postList: PostListI): types.FetchPostListI => {
		return {
			type: types.FETCH_POST_LIST_SUCCEEDED,
			postList,
		};
	};

	createPostItemRequest = (postItem: PostItemI): types.CreatePostItemI => {
		return {
			type: types.CREATE_POST_ITEM_REQUEST,
			postItem,
		};
	};
	createPostItemSucceeded = (postItem: PostItemI): types.CreatePostItemI => {
		return {
			type: types.CREATE_POST_ITEM_SUCCEEDED,
			postItem,
		};
	};

	getPostDetail = (postId: string | undefined): types.GetPostDetailI => {
		return {
			type: types.GET_POST_DETAIL,
			postId,
		};
	};

	editPostItemRequest = (postId: string | undefined, postEdit: PostItemI): types.EditPostItemI => {
		return {
			type: types.EDIT_POST_ITEM_REQUEST,
			postId,
			postEdit,
		};
	};
	editPostItemSucceeded = (postId: string | undefined, postEdit: PostItemI | undefined): types.EditPostItemI => {
		return {
			type: types.EDIT_POST_ITEM_SUCCEEDED,
			postId,
			postEdit,
		};
	};

	deletePostItemRequest = (postId: string | undefined): types.DeletePostItemI => {
		return {
			type: types.DELETE_POST_ITEM_REQUEST,
			postId,
		};
	};
	deletePostItemSucceeded = (postId: string | undefined): types.DeletePostItemI => {
		return {
			type: types.DELETE_POST_ITEM_SUCCEEDED,
			postId,
		};
	};

	likePostItemRequest = (postId: string | undefined): types.LikePostItemI => {
		return {
			type: types.LIKE_POST_ITEM_REQUEST,
			postId,
		};
	};
	likePostItemSucceeded = (postId: string | undefined, postLike: PostItemI): types.LikePostItemI => {
		return {
			type: types.LIKE_POST_ITEM_SUCCEEDED,
			postId,
			postLike,
		};
	};
}

export default new postsAction();
