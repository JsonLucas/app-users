import { Box } from "@chakra-ui/react";
import { ThreeDots } from "react-loader-spinner";

export function Loading() {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
	  position='absolute'
    >
      <ThreeDots color="lightblue" />
    </Box>
  );
}
