import Toast from 'react-native-toast-message';

export const useToast = () => {
	const responseError = (e: any) => {
		let message = '';
		if(e.response){
			message = e.response.data;
		}else{
			message = e.message;
		}
		Toast.show({
			type: 'error',
			text1: message
		});
	}

	const successResponse = (message: string) => {
		Toast.show({
			type: 'success',
			text1: message
		});
	}

	return { responseError, successResponse };
}