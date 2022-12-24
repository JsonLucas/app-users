export interface IUser{
	id: number,
	name: string,
	email: string,
	password: string,
	picture?: string,
	createdAt?: Date,
	updatedAt?: Date
}

export type User = IUser & { previousPictureId: string };
export type SignUp = Pick<IUser, 'name' | 'email' | 'password' | 'picture'> & { confirmPassword: string };
export type Login = Pick<IUser, 'email' | 'password'>;