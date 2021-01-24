import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { Avatar, Button, Paper, Grid, Typography, Container, CircularProgress } from "@material-ui/core";
import useStyles from "./style";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";

import { Formik } from "formik";
import * as Yup from "yup";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

import InputField from "../../components/utils/InputField";
import GoogleIcon from "../../components/utils/GoogleIcon";

import { useDispatch, useSelector } from "react-redux";
import authsAction from "../../stores/redux/actions/authsAction";
import { RootState } from "../../stores/rootReducer";

const YupSchema = Yup.object({});

const SignUpPage = (): JSX.Element => {
	const classes = useStyles();
	const {
		authsReducer: { checkAuthentication },
		utilsReducer: { loading },
	} = useSelector((state: RootState) => state);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
	const { signUpRequest } = authsAction;
	const dispatch = useDispatch();

	const handleShowPassword = (): void => setShowPassword(!showPassword);

	const handleShowConfirmPassword = (): void => setShowConfirmPassword(!showConfirmPassword);

	const googleSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
		console.log(res);
	};

	const googleFailure = (error): void => {
		console.log(error);
	};

	if (checkAuthentication === true) return <Redirect to="/" />;

	return (
		<>
			{checkAuthentication === undefined || loading ? (
				<CircularProgress />
			) : (
				checkAuthentication === false && (
					<Formik
						initialValues={{
							firstName: "",
							lastName: "",
							email: "",
							password: "",
							confirmPassword: "",
						}}
						onSubmit={(values, actions) => {
							dispatch(
								signUpRequest({
									firstName: values.firstName,
									lastName: values.lastName,
									email: values.email,
									password: values.password,
								})
							);
							actions.resetForm();
						}}
						validationSchema={YupSchema}>
						{(props) => (
							<Container component="main" maxWidth="xs">
								<Paper className={classes.paper} elevation={3}>
									<Avatar className={classes.avatar}>
										<LockOutLinedIcon />
									</Avatar>
									<Typography variant="h5">Sign In</Typography>
									<form className={classes.form} onSubmit={props.handleSubmit}>
										<Grid container spacing={2}>
											<InputField
												name="firstName"
												label="First Name"
												type="text"
												half
												{...props}
											/>
											<InputField name="lastName" label="Last Name" type="text" half {...props} />
											<InputField name="email" label="Email Address" type="email" {...props} />
											<InputField
												name="password"
												label="Password"
												handleShowPassword={handleShowPassword}
												type={showPassword ? "text" : "password"}
												{...props}
											/>
											<InputField
												name="confirmPassword"
												label="Repeat Password"
												handleShowPassword={handleShowConfirmPassword}
												type={showConfirmPassword ? "text" : "password"}
												{...props}
											/>
										</Grid>
										<Button
											type="submit"
											fullWidth
											variant="contained"
											color="primary"
											className={classes.submit}>
											Sign Up
										</Button>
										<GoogleLogin
											clientId="172737183858-68bogjorqekfo8lvkqsuvs4op8spasqi.apps.googleusercontent.com"
											render={(renderProps): JSX.Element => (
												<Button
													className={classes.googleButton}
													color="primary"
													fullWidth
													onClick={renderProps.onClick}
													startIcon={<GoogleIcon />}
													variant="contained">
													Google Sign In
												</Button>
											)}
											onSuccess={googleSuccess}
											onFailure={googleFailure}
											cookiePolicy="single_host_origin"
										/>
										<Grid container justify="flex-end">
											<Grid item>
												<Button style={{ marginTop: 10 }}>
													<Link to="/login">Already have an account ? Sign In</Link>
												</Button>
											</Grid>
										</Grid>
									</form>
								</Paper>
							</Container>
						)}
					</Formik>
				)
			)}
		</>
	);
};

export default SignUpPage;
