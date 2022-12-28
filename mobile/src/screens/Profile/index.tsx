import { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { ProfileData } from "../../components/ProfileData";
import { LoggedContext } from "../../contexts/logged";
import { useProfileData } from "../../hooks/useProfileData";
import { Main } from "../../styles";

export function Profile({ navigation }: any) {
  const { isLogged } = useContext(LoggedContext);
  const { profile } = useProfileData();
  useEffect(() => {
    if (!isLogged) {
      navigation.navigate("Login");
    }
  }, []);
  return (
    <SafeAreaView style={Main.Home}>
      {profile.isLoading && <Loading />}
      {profile.data && (
        <>
          <Header navigation={navigation} profile={profile.data} />
          <ProfileData navigation={navigation} profile={profile.data} />
        </>
      )}
    </SafeAreaView>
  );
}
