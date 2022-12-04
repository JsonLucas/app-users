import { useLocalStorage } from '../hooks/useLocalStorage';
import axios from 'axios';

const { getToken } = useLocalStorage();
export const api = axios.create({
	baseURL: 'http://localhost:5000', 
	headers: { authorization: getToken() }
});