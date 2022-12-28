import AsyncStorage from "@react-native-async-storage/async-storage";

export const useToken = () => {
	const setToken = async (token: string) => {
		const auth = `Bearer ${token}`;
		await AsyncStorage.setItem('app_users-token', auth);
	}
	const getToken = async () => {
		const jsonToken = await AsyncStorage.getItem('app_users-token');
		if(jsonToken){
			return jsonToken;
		}
		return null;
	}
	const removeToken = async () => {
		await AsyncStorage.removeItem('app_users-token');
	}

	return { setToken, getToken, removeToken };
}