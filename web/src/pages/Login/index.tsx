import { Box } from "@chakra-ui/react";
import { CardLogin } from "../../components/CardLogin";

export function Login() {
  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
      <CardLogin />
    </Box>
  );
}
