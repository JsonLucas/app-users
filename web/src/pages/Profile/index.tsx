import { Box } from "@chakra-ui/react";
import { CardUserData } from "../../components/CardUserData";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useProfileData } from "../../hooks/useProfileData";

export function Profile() {
  const { profile } = useProfileData();
  return (
    <Box>
      {profile.isLoading && <Loading />}
      {profile.data && (
        <>
          <Header profile={profile.data} />
          <CardUserData profile={profile.data} />
        </>
      )}
    </Box>
  );
}
