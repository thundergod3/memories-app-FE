import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../stores/rootReducer";
import { PostItemI } from "../../../stores/redux/reducers/postsReducer";

import PostItem from "../PostItem";

import useStyles from "./style";
import { Grid, CircularProgress } from "@material-ui/core";

const PostList = (): JSX.Element => {
	const {
		postsReducer: { postList },
	} = useSelector((state: RootState) => state);
	const classes = useStyles();

	return (
		<>
			{!postList.length ? (
				<CircularProgress />
			) : (
				<Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
					{postList.map(
						(post: PostItemI): JSX.Element => (
							<Grid item key={post._id} xs={12} sm={6}>
								<PostItem post={post} />
							</Grid>
						)
					)}
				</Grid>
			)}
		</>
	);
};

export default PostList;
