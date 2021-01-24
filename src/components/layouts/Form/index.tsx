import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FileBase from "react-file-base64";

import { useDispatch, useSelector } from "react-redux";
import postsAction from "../../../stores/redux/actions/postsAction";
import { PostItemI } from "../../../stores/redux/reducers/postsReducer";
import { RootState } from "../../../stores/rootReducer";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./style";

const Form = (): JSX.Element => {
	const {
		postsReducer: { postDetail },
		authsReducer: { userData, checkAuthentication },
	} = useSelector((state: RootState) => state);
	const [postData, setPostData] = useState<PostItemI>({
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});
	const { createPostItemRequest, editPostItemRequest } = postsAction;
	const dispatch = useDispatch();
	const classes = useStyles();

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (Object.keys(postDetail).length !== 0) {
			dispatch(
				editPostItemRequest(postDetail._id, {
					...postData,
					tags: (postData.tags as string).split(",").map((item: any): string => item.trim()),
					name: userData.name,
				})
			);
		} else {
			dispatch(
				createPostItemRequest({
					...postData,
					tags: (postData.tags as string).split(",").map((item: any): string => item.trim()),
					name: userData.name,
				})
			);
		}

		handleClear();
	};

	const handleClear = (): void => {
		setPostData({
			title: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
	};

	useEffect(() => {
		if (Object.keys(postDetail).length !== 0) {
			setPostData({ ...postDetail });
		}
	}, [postDetail]);

	return (
		<Paper className={classes.paper}>
			{checkAuthentication === false ? (
				<Typography variant="h6" align="center">
					Please Sign In to create your own memories and like other's memories
				</Typography>
			) : (
				<form
					autoComplete="off"
					noValidate
					className={`${classes.root} ${classes.form}`}
					onSubmit={handleSubmit}>
					<Typography variant="h6">Create a Memory</Typography>
					<TextField
						name="title"
						variant="outlined"
						label="Title"
						fullWidth
						value={postData.title}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPostData({ ...postData, [e.target.name]: e.target.value })
						}
					/>
					<TextField
						name="message"
						variant="outlined"
						label="Message"
						fullWidth
						multiline
						rows={4}
						value={postData.message}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPostData({ ...postData, [e.target.name]: e.target.value })
						}
					/>
					<TextField
						name="tags"
						variant="outlined"
						label="Tags"
						fullWidth
						value={postData.tags}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPostData({ ...postData, [e.target.name]: e.target.value })
						}
					/>
					<div className={classes.fileInput}>
						<FileBase
							type="file"
							multiple={false}
							onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
						/>
					</div>
					<Button
						className={classes.buttonSubmit}
						variant="contained"
						color="primary"
						size="large"
						type="submit"
						fullWidth>
						Submit
					</Button>
					<Button
						className={classes.buttonSubmit}
						variant="contained"
						color="secondary"
						size="small"
						onClick={handleClear}
						fullWidth>
						Clear
					</Button>
				</form>
			)}
		</Paper>
	);
};

export default Form;
