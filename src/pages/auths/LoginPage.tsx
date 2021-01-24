import React, { Dispatch, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { Avatar, Button, Paper, Grid, Typography, Container, CircularProgress } from "@material-ui/core";
import useStyles from "./style";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";

import { Formik } from "formik";
import * as Yup from "yup";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

import InputField from "../../components/utils/InputField";
import GoogleIcon from "../../components/utils/GoogleIcon";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../stores/rootReducer";
import authsAction from "../../stores/redux/actions/authsAction";
import utilsAction from "../../stores/redux/actions/utilsAction";

const YupSchema = Yup.object({});

const LoginPage = (): JSX.Element => {
	const classes = useStyles();
	const {
		authsReducer: { checkAuthentication },
		utilsReducer: { loading },
	} = useSelector((state: RootState) => state);
	const dispatch: Dispatch<any> = useDispatch();
	const { signInRequest } = authsAction;
	const { loadingUI } = utilsAction;
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleShowPassword = (): void => setShowPassword(!showPassword);

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
							email: "",
							password: "",
						}}
						onSubmit={(values, actions) => {
							dispatch(loadingUI());
							dispatch(
								signInRequest({
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
											<InputField name="email" label="Email Address" type="email" {...props} />
											<InputField
												name="password"
												label="Password"
												handleShowPassword={handleShowPassword}
												type={showPassword ? "text" : "password"}
												{...props}
											/>
										</Grid>
										<Button
											type="submit"
											fullWidth
											variant="contained"
											color="primary"
											className={classes.submit}>
											Sign In
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
													<Link to="/signup">Don't have an account ? Sign up</Link>
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

export default LoginPage;
