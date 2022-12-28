import { useState, useContext, useEffect } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { LoggedContext } from "../../contexts/logged";
import { useToken } from "../../hooks/useToken";
import { Styles } from "./style";
import { IoIosHome, IoIosPerson } from "react-icons/io";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IUser } from "../../interfaces/users";
import { useStorage } from "../../hooks/useStorage";
import { useToast } from "../../hooks/useToast";

interface props {
  navigation: any;
  profile: IUser;
}

export function Header({ navigation, profile }: props) {
  const [visible, setVisible] = useState(false);
  const [picture, setPicture] = useState<string>();
  const { getProfilePicture } = useStorage();
  const { successResponse } = useToast();
  const { removeToken } = useToken();
  const { setIsLogged } = useContext(LoggedContext);
  const logout = async () => {
    await removeToken();
    setIsLogged(false);
	successResponse("Logout efetuado com sucesso!");
    navigation.navigate("Login");
  };
  useEffect(() => {
    (async () => {
      if (profile.picture) {
        const profilePicture = await getProfilePicture(profile.picture);
        setPicture(profilePicture);
      }
    })();
  }, [profile.picture]);
  return (
    <View style={Styles.Main}>
      <TouchableOpacity
        onPress={() => {
          setVisible(!visible);
          navigation.navigate("Home");
        }}
      >
        <IoIosHome color="white" size={30} />
      </TouchableOpacity>
      <Pressable
        style={Styles.ProfilePictureBox}
        onPress={() => setVisible(!visible)}
      >
        {picture && (
          <Image style={Styles.ProfilPicture} source={{ uri: picture }} />
        )}
        {!picture && (
          <View style={Styles.PersonIcon}>
            <IoIosPerson color="black" size={40} />
          </View>
        )}
        <View style={{ ...Styles.AppOptions, display: visible ? undefined : "none"}}>
          <Text
            style={Styles.OptionsText}
            onPress={() => {
              setVisible(!visible);
              navigation.navigate("Profile");
            }}
          >
            Perfil
          </Text>
          <Text style={Styles.OptionsText} onPress={logout}>
            Sair
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
