import { useLocalStorage } from '../hooks/useLocalStorage';
import axios from 'axios';

const { getToken } = useLocalStorage();
export const api = axios.create({ baseURL: 'http://localhost:5000' });

api.interceptors.request.use(async (request) => {
	const token = getToken();
	request.headers = { authorization: `Bearer ${token}` };
	return request;
});