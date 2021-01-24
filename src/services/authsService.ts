import HTTPMethod from "./index";

interface FormSignInI {
	email: string;
	password: string;
}
interface FormSignUpI {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

interface SignInI {
	formSignIn: FormSignInI;
}
interface SignUpI {
	formSignUp: FormSignUpI;
}

class AuthsService {
	getUser = (): Promise<any> => HTTPMethod.get("/auth/get-user");

	signin = ({ formSignIn }: SignInI): Promise<any> => HTTPMethod.post("/auth/signin", { ...formSignIn });
	signup = ({ formSignUp }: SignUpI): Promise<any> => HTTPMethod.post("/auth/signup", { ...formSignUp });
}

export default new AuthsService();
