import HTTPMethod from "./index";

import { PostItemI } from "../stores/redux/reducers/postsReducer";

interface CreatePostItemI {
	postItem: PostItemI;
}
interface EditPostItemI {
	postId: String;
	postEdit: PostItemI;
}

class postServices {
	fetchPostList = (): Promise<any> => HTTPMethod.get("/posts");

	createPostItem = ({ postItem }: CreatePostItemI): Promise<any> => HTTPMethod.post("/posts/create", { ...postItem });

	editPostItem = ({ postId, postEdit }: EditPostItemI): Promise<any> =>
		HTTPMethod.put(`/posts/edit?id=${postId}`, { ...postEdit });
	likePostItem = ({ postId }: EditPostItemI): Promise<any> => HTTPMethod.put(`/posts/likePost?id=${postId}`);

	deletePostItem = ({ postId }: EditPostItemI): Promise<any> => HTTPMethod.delete(`/posts/delete?id=${postId}`);
}

export default new postServices();
