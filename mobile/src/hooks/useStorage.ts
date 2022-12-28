import { firebase } from "../config/firebase";
import { SignUp } from "../interfaces/users";
import { v4 as uuid } from "uuid";
import { signUpUser } from "../api/users";
import { useProfileData } from "./useProfileData";

export const useStorage = () => {
  const { updateProfilePicture } = useProfileData();
  const updatePicture = async (file: string, previousPicture?: string) => {
    const response = await fetch(file);
    const blob = await response.blob();
	const updatedPictureId = uuid();
	if(previousPicture){
		await firebase.storage().ref().child(previousPicture).delete();
	}
    await firebase.storage().ref().child(updatedPictureId).put(blob);
    await updateProfilePicture(updatedPictureId);
  };

  const completeSignUp = async (file: string, data: SignUp) => {
    const response = await fetch(file);
    const blob = await response.blob();
	const profilePictureId = uuid();
    await firebase.storage().ref().child(profilePictureId).put(blob);
	await signUpUser({...data, picture: profilePictureId});
  };

  const getProfilePicture = async (pictureId: string) => {
    const uploadImage = await firebase.storage().ref().child(pictureId).getDownloadURL();
	return uploadImage;
  };
  
  return { updatePicture, completeSignUp, getProfilePicture };
};
