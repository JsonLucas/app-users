import { toast } from 'react-toastify';

export const useToast = () => {
	const successToast = (message: string) => {
		toast.success(message, {
			position: "top-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	}

	const errorToast = (e: any) => {
		let message = '';
		if(e.response){
			message = e.response.data;
		}else{
			message = e.message;
		}
		toast.error(message, {
			position: "top-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	}

	return { successToast, errorToast }
}