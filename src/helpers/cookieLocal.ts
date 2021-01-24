import cookie, { CookiesStatic } from "js-cookie";

class cookieLocal {
	cookie: CookiesStatic<object>;

	constructor() {
		this.cookie = cookie;
	}

	getFromLocal = (key: string): any => JSON.parse(localStorage.getItem(key) || "null");

	saveToLocal = (key: string, value: string): any => localStorage.setItem(key, JSON.stringify(value));

	removeFromLocal = (key: string): any => localStorage.removeItem(key);

	getFromCookie = (key: string): any => cookie.get(key);

	saveToCookie = (key: string, value: string): any => cookie.set(key, value);

	removeFromCookie = (key: string): any =>
		cookie.remove(key, {
			expires: 1,
		});
}

export default new cookieLocal();
