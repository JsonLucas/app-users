import { firebase } from "../config/firebase";
import { v4 as uuid } from "uuid";
import { createUser } from "../api/users";
import { SignUp } from "../interfaces/users";
import { useProfileData } from "./useProfileData";

export const useStorage = () => {
  const { updateProfilePicture } = useProfileData();

  const completeSignUp = async (file: any, data: SignUp) => {
	const imageId = uuid();
	await firebase.storage().ref().child(imageId).put(file);
	await createUser({...data, picture: imageId});
  }

  const updatePicture = async (file: any, previousPicture?: string) => {
	const imageId = uuid();
	if(previousPicture){
		await firebase.storage().ref().child(previousPicture).delete();
	}
    await firebase.storage().ref().child(imageId).put(file);
	await updateProfilePicture(imageId);
  };

  const getPicture = async (pictureId: string) => {
	const imageUrl = await firebase.storage().ref().child(pictureId).getDownloadURL();
	return imageUrl;
  }

  return {
	completeSignUp,
    updatePicture,
	getPicture
  };
};
