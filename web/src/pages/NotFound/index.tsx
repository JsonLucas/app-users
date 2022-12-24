import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
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
	  <Text pl='2px' textDecor='underline' onClick={() => navigate('/')}>Clique aqui para voltar.</Text>
    </Box>
  );
}
