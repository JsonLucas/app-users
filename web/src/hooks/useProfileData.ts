import { useQuery, useMutation } from "react-query";
import { getProfileData } from "../api/users";
import { updateProfilePicture as changeProfilePicture } from "../api/users";
import { queryClient } from "../App";

export const useProfileData = () => {
  const { data, isLoading, error } = useQuery(["profile"], async () => {
    const data = await getProfileData();
    return data;
  });

  const { mutateAsync } = useMutation(
    async (picture: string | FormData) => {
      await changeProfilePicture(picture);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["profile"]);
      },
    }
  );

  return {
    profile: { data, isLoading },
    updateProfilePicture: mutateAsync,
  };
};
