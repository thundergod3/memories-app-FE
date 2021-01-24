import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/rootReducer";
import { PostItemI } from "../../../stores/redux/reducers/postsReducer";
import postsAction from "../../../stores/redux/actions/postsAction";

import useStyles from "./style";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinecIcon from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import moment from "moment";

interface Props {
	post: PostItemI;
}

const PostItem = ({ post }: Props): JSX.Element => {
	const {
		authsReducer: { userData, checkAuthentication },
	} = useSelector((state: RootState) => state);
	const { getPostDetail, deletePostItemRequest, likePostItemRequest } = postsAction;
	const dispatch = useDispatch();
	const classes = useStyles();

	const likesLayout = (): JSX.Element => {
		if (post.likes.length > 0) {
			return post.likes.find((like: string) => like === (userData.googleId || userData._id)) ? (
				<>
					<ThumbUpAltIcon fontSize="small" />
					&nbsp;
					{post.likes.length > 2
						? `You and ${post.likes.length - 1} others`
						: `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
				</>
			) : (
				<>
					<ThumbUpAltOutlinecIcon fontSize="small" />
					&nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
				</>
			);
		}

		return (
			<>
				<ThumbUpAltOutlinecIcon fontSize="small" />
				&nbsp;Like
			</>
		);
	};

	return (
		<Card className={classes.card} key={post._id}>
			<CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
			<div className={classes.overlay}>
				<Typography variant="h6">{post.name}</Typography>
				<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
			</div>
			<div className={classes.overlay2}>
				{userData._id === post.creator && (
					<Button style={{ color: "#fff" }} size="small" onClick={() => dispatch(getPostDetail(post._id))}>
						<MoreHorizIcon fontSize="default" />
					</Button>
				)}
			</div>
			<div className={classes.details}>
				<Typography variant="body2" color="textSecondary">
					{post.tags.map((tag: string): string => `#${tag} `)}
				</Typography>
			</div>
			<Typography className={classes.title} variant="h5" gutterBottom>
				{post.title}
			</Typography>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button
					size="small"
					color="primary"
					disabled={!checkAuthentication}
					onClick={() => dispatch(likePostItemRequest(post._id))}>
					{likesLayout()}
				</Button>
				{(userData._id === post.creator || userData.googleId === post.creator) && (
					<Button size="small" color="primary" onClick={() => dispatch(deletePostItemRequest(post._id))}>
						<DeleteIcon fontSize="small" />
						Delete
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default PostItem;
