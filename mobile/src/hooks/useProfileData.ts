import { useQuery, useMutation } from 'react-query';
import { queryClient } from '../../App';
import { getProfileData, updateProfilePicture } from '../api/users';

export const useProfileData = () => {
	const { data, isLoading } = useQuery(['profile-data'], async () => {
		const data = await getProfileData();
		return data;
	});

	const { mutateAsync } = useMutation(async (profilePicture: string) => {
		await updateProfilePicture(profilePicture);
	}, { onSuccess: () => queryClient.invalidateQueries(['profile-data']) });

	return { 
		profile: { data, isLoading },
		updateProfilePicture: mutateAsync 
	};
}