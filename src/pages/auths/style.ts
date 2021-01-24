import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(2),
	},
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
		},
	},
	avatar: {
		margin: theme.spacing(1),
		background: theme.palette.secondary.main,
	},
	form: {
		marginTop: theme.spacing(3),
	},
	submit: {
		marginTop: theme.spacing(3),
	},
	googleButton: {
		marginTop: theme.spacing(2),
	},
}));
