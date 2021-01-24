import React from "react";

import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

interface Props {
	half?: boolean;
	name: string;
	label: string;
	handleChange: any;
	type: string;
	handleShowPassword?: any;
}

const InputField = ({ half, name, label, handleChange, type, handleShowPassword }: Props): JSX.Element => {
	return (
		<Grid item xs={6} sm={half ? 6 : 12}>
			<TextField
				name={name}
				label={label}
				type={type}
				variant="outlined"
				onChange={handleChange(name)}
				autoFocus
				required
				fullWidth
				InputProps={
					name === "password" || name === "confirmPassword"
						? {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleShowPassword}>
											{type === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
										</IconButton>
									</InputAdornment>
								),
						  }
						: undefined
				}
			/>
		</Grid>
	);
};

export default InputField;
