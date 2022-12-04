import { Box, Text } from "@chakra-ui/react";

export function NotFound() {
  return (
    <Box
	  position='absolute'
	  w='100%'
	  h='100%'
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="35px"
	  color='white'
    >
      <Text>Página não encontrada.</Text>
    </Box>
  );
}
