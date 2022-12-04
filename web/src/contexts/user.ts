import { createContext } from 'react';
import { IUser } from '../interfaces/users';

interface IUserContext {
	profile: IUser,
	setProfile: (param: IUser) => void
}

export const UserContext = createContext({} as IUserContext);