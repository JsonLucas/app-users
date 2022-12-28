import { View, Text, Image, TouchableOpacity } from "react-native";
import { IUser } from "../../interfaces/users";
import { Styles } from "./styles";
import { useState, useEffect } from "react";
import { useStorage } from "../../hooks/useStorage";
import { ThreeDots } from "react-loader-spinner";
import { useToast } from "../../hooks/useToast";
import { useUpload } from "../../hooks/useUpload";
import { IoIosPerson } from "react-icons/io";
import dayjs from "dayjs";

interface props {
  navigation: any;
  profile: IUser;
}

export function ProfileData({ navigation, profile }: props) {
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState<string>();
  const [newPicture, setNewPicture] = useState<string>();
  const { updatePicture, getProfilePicture } = useStorage();
  const { responseError, successResponse } = useToast();
  const { browseFile } = useUpload();

  const imagePicker = async () => {
    const file = await browseFile();
    setNewPicture(file);
  };

  const confirmUpload = async () => {
    setLoading(true);
    try {
      if (newPicture) {
        await updatePicture(newPicture, profile.picture);
		setNewPicture(undefined);
        successResponse("upload concluído com sucesso!");
        setTimeout(navigation.navigate("Home"), 500);
      }
    } catch (e: any) {
      console.log(e);
      responseError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      if (profile.picture) {
        const picture = await getProfilePicture(profile.picture);
        setPicture(picture);
      }
    })();
  }, [profile.picture]);

  return (
    <View style={Styles.Container}>
      <View>
        <View style={Styles.ProfileImageBox}>
          <TouchableOpacity style={Styles.Wrapper} onPress={imagePicker}>
            {!picture && !newPicture && <IoIosPerson size={70} color='black' />}
          </TouchableOpacity>
            <Image
              source={{ uri: (newPicture ? newPicture : picture) }}
              style={Styles.ContentImageBox}
            />
        </View>
        <View style={{ display: newPicture ? undefined : "none" }}>
          <TouchableOpacity
            style={Styles.UploadOptionButton}
            onPress={confirmUpload}
          >
            {loading && <ThreeDots width="100%" height="100%" color="white" />}
            {!loading && (
              <Text style={{ color: "white" }}>Confirmar upload</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...Styles.UploadOptionButton, backgroundColor: "darkred" }}
            onPress={() => setNewPicture(undefined)}
          >
            <Text style={{ color: "white" }}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>	  
      <View style={Styles.BoxUserData}>
        <View style={Styles.UserDataRow}>
          <Text style={Styles.UserDataLabel}>Nome:</Text>
          <Text style={Styles.UserDataInfo}>{profile.name}</Text>
        </View>
        <View style={Styles.UserDataRow}>
          <Text style={Styles.UserDataLabel}>Email:</Text>
          <Text style={Styles.UserDataInfo}>{profile.email}</Text>
        </View>
        <View style={Styles.UserDataRow}>
          <Text style={Styles.UserDataLabel}>Criado em:</Text>
          <Text style={Styles.UserDataInfo}>
            {dayjs(profile.createdAt).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
    </View>
  );
}
