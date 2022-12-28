import { SafeAreaView } from "react-native";
import { Header } from "../../components/Header";
import { Main } from "../../../src/styles";
import { useContext, useEffect } from "react";
import { LoggedContext } from "../../contexts/logged";
import { useProfileData } from "../../hooks/useProfileData";
import { Loading } from "../../components/Loading";

export function Home({ navigation }: any) {
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
        </>
      )}
    </SafeAreaView>
  );
}
