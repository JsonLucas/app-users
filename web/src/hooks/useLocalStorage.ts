export const useLocalStorage = () => {
	const setToken = (token: string) => {
		localStorage.setItem('app_users-token', token);
	}

	const getToken = () => {
		const jsonToken = localStorage.getItem('app_users-token');
		if(jsonToken){
			return jsonToken;
		}
		return null;
	}

	const endSession = () => {
		localStorage.removeItem('app_users-token');
	}

	return { setToken, getToken, endSession }
}