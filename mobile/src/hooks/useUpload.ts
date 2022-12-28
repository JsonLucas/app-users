import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as Device from "expo-device";

export const useUpload = () => {
  const browseFile = async () => {
    // const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // if (status !== "granted") {
    //   alert("Nós precisamos dessa permissão.");
    //   return;
    // }
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const { canceled, assets } = data;
    if (canceled || !assets) {
      return;
    }

    return assets[0].uri;
  };
  return { browseFile };
};
