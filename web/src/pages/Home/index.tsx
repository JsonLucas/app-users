import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useProfileData } from "../../hooks/useProfileData";
import { useStorage } from "../../hooks/useStorage";
import { User } from "../../interfaces/users";

export function Home() {
  const [completeProfile, setCompleteProfile] = useState<User>();
  const { profile } = useProfileData();
  const { getPicture } = useStorage();
  useEffect(() => {
    (async () => {
      try {
        const { data } = profile;
        if (data && data.picture) {
          const picture = await getPicture(data.picture);
		  const previousPictureId = data.picture;
          setCompleteProfile({ ...data, picture, previousPictureId });
        }
      } catch (e: any) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <Box w="100%" h="100vh">
      {profile.isLoading && <Loading />}
      {completeProfile && <Header profile={completeProfile} />}
    </Box>
  );
}
