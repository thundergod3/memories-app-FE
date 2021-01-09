import React from "react";

import { PostItemI } from "../../../stores/redux/reducers/postsReducer";
import postsAction from "../../../stores/redux/actions/postsAction";

import useStyles from "./style";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import moment from "moment";
import { useDispatch } from "react-redux";

interface Props {
	post: PostItemI;
}

const PostItem = ({ post }: Props): JSX.Element => {
	const { getPostDetail, deletePostItemRequest, likePostItemRequest } = postsAction;
	const dispatch = useDispatch();
	const classes = useStyles();

	return (
		<Card className={classes.card} key={post._id}>
			<CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
			<div className={classes.overlay}>
				<Typography variant="h6">{post.creator}</Typography>
				<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
			</div>
			<div className={classes.overlay2}>
				<Button style={{ color: "#fff" }} size="small" onClick={() => dispatch(getPostDetail(post._id))}>
					<MoreHorizIcon fontSize="default" />
				</Button>
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
				<Button size="small" color="primary" onClick={() => dispatch(likePostItemRequest(post._id))}>
					<ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp;{post.likeCount}
				</Button>
				<Button size="small" color="primary" onClick={() => dispatch(deletePostItemRequest(post._id))}>
					<DeleteIcon fontSize="small" />
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default PostItem;
