import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FileBase from "react-file-base64";

import { useDispatch, useSelector } from "react-redux";
import postsAction from "../../../stores/redux/actions/postsAction";
import { PostItemI } from "../../../stores/redux/reducers/postsReducer";
import { RootState } from "../../../stores/rootReducer";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles, { StylesI } from "./style";

const Form = (): JSX.Element => {
	const {
		postsReducer: { postDetail },
	} = useSelector((state: RootState) => state);
	const [postData, setPostData] = useState<PostItemI>({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});
	const { createPostItemRequest, editPostItemRequest } = postsAction;
	const dispatch = useDispatch();
	const classes: StylesI = useStyles();

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (Object.keys(postDetail).length !== 0) {
			dispatch(
				editPostItemRequest(postDetail._id, {
					...postData,
					tags: (postData.tags as string).split(",").map((item: any): string => item.trim()),
				})
			);
		} else {
			dispatch(
				createPostItemRequest({
					...postData,
					tags: (postData.tags as string).split(",").map((item: any): string => item.trim()),
				})
			);
		}

		handleClear();
	};

	const handleClear = (): void => {
		setPostData({
			creator: "",
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
			<form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
				<Typography variant="h6">Create a Memory</Typography>
				<TextField
					name="creator"
					variant="outlined"
					label="Creator"
					fullWidth
					value={postData.creator}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setPostData({ ...postData, [e.target.name]: e.target.value })
					}
				/>
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
		</Paper>
	);
};

export default Form;
