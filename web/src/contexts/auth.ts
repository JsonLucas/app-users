import { createContext } from 'react';

interface IAuth{
	logged: boolean,
	setLogged: (param: boolean) => void
}

export const AuthContext = createContext({} as IAuth);