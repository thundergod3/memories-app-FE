import axios, { AxiosRequestConfig, AxiosStatic } from "axios";

import cookieLocal from "../helpers/cookieLocal";

class HTTPMethod {
	axios: AxiosStatic;

	constructor() {
		this.axios = axios;
		this.axios.defaults.baseURL = "http://localhost:8080";
	}

	get = (url: string, remainProps?: any): Promise<any> => axios.get(url, remainProps);

	post = (url: string, remainProps?: any): Promise<any> => axios.post(url, remainProps);

	put = (url: string, remainProps?: any): Promise<any> => axios.put(url, remainProps);

	delete = (url: string, remainProps?: any): Promise<any> => axios.delete(url, remainProps);

	attachTokenToHeader = ({ token }: any): void => {
		axios.interceptors.request.use(
			function (config: AxiosRequestConfig): AxiosRequestConfig {
				if (token) {
					config.headers.Authorization = `Bearer ${token}`;
				}

				return config;
			},
			function (error): Promise<any> {
				return Promise.reject(error);
			}
		);
	};
}

export default new HTTPMethod();
