import axios, { AxiosStatic } from "axios";

class HTTPMethod {
	axios: AxiosStatic;

	constructor() {
		this.axios = axios;
		this.axios.defaults.baseURL = "https://memories-website.herokuapp.com";
	}

	get = (url: string, remainProps?: any): Promise<any> => axios.get(url, remainProps);

	post = (url: string, remainProps?: any): Promise<any> => axios.post(url, remainProps);

	put = (url: string, remainProps?: any): Promise<any> => axios.put(url, remainProps);

	delete = (url: string, remainProps?: any): Promise<any> => axios.delete(url, remainProps);
}

export default new HTTPMethod();
