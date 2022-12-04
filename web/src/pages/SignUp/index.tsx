import { Box } from "@chakra-ui/react";
import { CardSignUp } from "../../components/CardSignUp";

export function SignUp() {
  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
      <CardSignUp />
    </Box>
  );
}
