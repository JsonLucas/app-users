import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(8, ({min}) => `Password must have ${min} characters.`).required(),
	confirmPassword: yup.ref('password'),
	picture: yup.string()
});

export const loginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required()
});