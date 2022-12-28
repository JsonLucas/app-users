import axios from 'axios';
import { useToken } from '../hooks/useToken';

const { getToken } = useToken();
export const api = axios.create({baseURL: 'http://localhost:5000'});

api.interceptors.request.use(async (request) => {
	const token = await getToken();
	request.headers = { authorization: token };
	return request;
});