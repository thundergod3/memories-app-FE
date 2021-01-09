import { PostItemI, PostListI } from "../stores/redux/reducers/postsReducer";

// POSTS TYPE
export const FETCH_POST_LIST_REQUEST: string = "FETCH_POST_LIST_REQUEST";
export const FETCH_POST_LIST_SUCCEEDED: string = "FETCH_POST_LIST_SUCCEEDED";

export const CREATE_POST_ITEM_REQUEST: string = "CREATE_POST_ITEM_REQUEST";
export const CREATE_POST_ITEM_SUCCEEDED: string = "CREATE_POST_ITEM_SUCCEEDED";

export const EDIT_POST_ITEM_REQUEST: string = "EDIT_POST_ITEM_REQUEST";
export const EDIT_POST_ITEM_SUCCEEDED: string = "EDIT_POST_ITEM_SUCCEEDED";

export const GET_POST_DETAIL: string = "GET_POST_DETAIL";

export const DELETE_POST_ITEM_REQUEST: string = "DELETE_POST_ITEM_REQUEST";
export const DELETE_POST_ITEM_SUCCEEDED: string = "DELETE_POST_ITEM_SUCCEEDED";

export const LIKE_POST_ITEM_REQUEST: string = "LIKE_POST_ITEM_REQUEST";
export const LIKE_POST_ITEM_SUCCEEDED: string = "LIKE_POST_ITEM_SUCCEEDED";

// INTERFACE POST ACTIONS
interface FetchPostListRequestI {
	type: typeof FETCH_POST_LIST_REQUEST;
}
interface FetchPostListSucceededI {
	type: typeof FETCH_POST_LIST_SUCCEEDED;
	postList: PostListI;
}

interface CreatePostItemRequestI {
	type: typeof CREATE_POST_ITEM_REQUEST;
	postItem: PostItemI;
}
interface CreatePostItemSucceededI {
	type: typeof CREATE_POST_ITEM_SUCCEEDED;
	postItem: PostItemI;
}

interface GetPostDetailI {
	type: typeof GET_POST_DETAIL;
	postId: string | undefined;
}

interface EditPostItemRequestI {
	type: typeof EDIT_POST_ITEM_REQUEST;
	postId: string | undefined;
	postEdit?: PostItemI;
}
interface EditPostItemSucceededI {
	type: typeof EDIT_POST_ITEM_SUCCEEDED;
	postId: string | undefined;
	postEdit?: PostItemI;
}

interface DeletePostItemRequestI {
	type: typeof DELETE_POST_ITEM_REQUEST;
	postId: string | undefined;
}
interface DeletePostItemSucceededI {
	type: typeof DELETE_POST_ITEM_SUCCEEDED;
	postId: string | undefined;
}

interface LikePostItemRequestI {
	type: typeof LIKE_POST_ITEM_REQUEST;
	postId: string | undefined;
}
interface LikePostItemSucceededI {
	type: typeof LIKE_POST_ITEM_SUCCEEDED;
	postId: string | undefined;
}

export type FetchPostListI = FetchPostListRequestI | FetchPostListSucceededI;
export type CreatePostItemI = CreatePostItemRequestI | CreatePostItemSucceededI;
export type { GetPostDetailI };
export type EditPostItemI = EditPostItemRequestI | EditPostItemSucceededI;
export type DeletePostItemI = DeletePostItemRequestI | DeletePostItemSucceededI;
export type LikePostItemI = LikePostItemRequestI | LikePostItemSucceededI;
