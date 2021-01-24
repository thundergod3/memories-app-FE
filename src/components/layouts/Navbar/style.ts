import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
	appBar: {
		borderRadius: 15,
		margin: "30px 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 30px",
	},
	heading: {
		color: "rgba(0, 183, 255, 1)",
	},
	img: {
		marginLeft: 15,
	},
	brandContainer: {
		flex: 0.7,
		"& a": {
			textDecoration: "none",
		},
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	profile: {},
	purple: {},
	username: {},
	logout: {},
}));
