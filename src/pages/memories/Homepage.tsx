import React from "react";

import { Container, Grow, Grid } from "@material-ui/core";

import "../pages.scss";

import useStyles from "../pages";
import PostList from "../../components/posts/PostList";
import Form from "../../components/layouts/Form";

const Homepage = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Grow in>
			<Container>
				<Grid
					className={classes.mainContainer}
					container
					justify="space-between"
					alignItems="stretch"
					spacing={3}>
					<Grid item xs={12} sm={7}>
						<PostList />
					</Grid>
					<Grid item xs={12} sm={4}>
						<Form />
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Homepage;
