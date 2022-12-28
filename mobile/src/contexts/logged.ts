import { createContext } from "react";

interface ILogged{
	isLogged: boolean,
	setIsLogged: (param: boolean) => void
}

export const LoggedContext = createContext({} as ILogged);