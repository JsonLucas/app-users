import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useProfileData } from "../../hooks/useProfileData";

export function Home() {
  const { profile } = useProfileData();
  return (
    <Box w="100%" h="100vh">
      {profile.isLoading && <Loading />}
      {profile.data && <Header profile={profile.data} />}
    </Box>
  );
}
