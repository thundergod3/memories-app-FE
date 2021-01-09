import { makeStyles, Theme } from "@material-ui/core/styles";

interface StylesI {
	root: any;
	paper: any;
	form: any;
	fileInput: any;
	buttonSubmit: any;
}

export default makeStyles(
	(theme: Theme): StylesI => ({
		root: {
			"& .MuiTextField-root": {
				margin: theme.spacing(1),
			},
		},
		paper: {
			padding: theme.spacing(2),
		},
		form: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "center",
		},
		fileInput: {
			width: "97%",
			margin: "10px 0",
		},
		buttonSubmit: {
			marginBottom: 10,
		},
	})
);

export type { StylesI };
