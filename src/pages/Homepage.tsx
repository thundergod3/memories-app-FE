import React from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import "./pages.scss";

import memories from "../assets/memories.png";

import useStyles from "./pages";
import PostList from "../components/posts/PostList";
import Form from "../components/layouts/Form";

const Homepage = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Container maxWidth="lg">
			<AppBar className="appBar" position="static" color="inherit">
				<Typography className="heading" variant="h2" align="center">
					Memories
				</Typography>
				<img src={memories} alt="memories" height="60" />
			</AppBar>
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
		</Container>
	);
};

export default Homepage;
