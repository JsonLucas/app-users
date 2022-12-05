import { api } from "..";
import { IUser, Login, SignUp } from "../../interfaces/users";

export const createUser = async (body: SignUp) => {
	return await api.post('/signup', body);
}

export const signInUser = async (body: Login) => {
	const { data } = await api.post('/', body);
	return data;
}

export const getProfileData = async () => {
	const { data } = await api.get<IUser>('/profile');
	return data;
}

export const updateProfilePicture = async (picture: string) => {
	return await api.patch('/profile/picture', { picture });
}