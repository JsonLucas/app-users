import { storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { createUser, updateProfilePicture } from "../api/users";
import { SignUp } from "../interfaces/users";
import { useProfileData } from "./useProfileData";

export const useUpload = () => {
  const { updateProfilePicture } = useProfileData();
  const fileUpload = (file: any) => {};
  const fireBaseUpload = async (
    file: any,
    actionType: "update" | "create",
    data?: SignUp
  ) => {
    const storageRef = ref(storage, `images/${uuid()}`);
    const uploadImage = uploadBytesResumable(storageRef, file);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (e) => {
        console.log(e);
        toast(e.message);
      },
      async () => {
        const imageUrl = await getDownloadURL(uploadImage.snapshot.ref);
        if (actionType === "create" && data) await createUser({ ...data, picture: imageUrl });
        else {
          await updateProfilePicture(imageUrl);
        }
      }
    );
  };
  return {
    fireBaseUpload,
    fileUpload,
  };
};
