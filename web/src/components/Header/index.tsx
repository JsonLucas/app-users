import { Box, Text, Image } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AuthContext } from "../../contexts/auth";
import { IUser, User } from "../../interfaces/users";
import { useStorage } from "../../hooks/useStorage";

interface props{
	profile: User
}

export function Header({profile}: props) {
  const [hidden, setHidden] = useState<boolean>(true);
  const { getPicture } = useStorage();
  const { endSession } = useLocalStorage();
  const { setLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    endSession();
    navigate("/");
	setLogged(false);
  };
  return (
    <Box
      p="10px"
      w="100%"
      h="70px"
      bgColor="#111"
      position="relative"
      display="flex"
      alignItems="center"
    >
      <Box
        ml="40px"
        color="white"
        cursor="pointer"
        _hover={{ color: "#ccc" }}
        onClick={() => navigate("/home")}
      >
        <IoIosHome size={30} />
      </Box>
      <Box display="flex" alignItems="center">
        <Box
          h="50px"
          w="50px"
          bgColor="transparent"
          position="absolute"
          top="10px"
          right="40px"
          borderRadius="50%"
		  cursor='pointer'
          onClick={() => setHidden(!hidden)}
        >
          <Image src={profile.picture} w="100%" h="100%" borderRadius="50%" />
          <Box
            p="5px"
            w="100px"
            hidden={hidden}
            textAlign="center"
            position="absolute"
            right="-25px"
            top="100%"
            cursor="pointer"
            bgColor="#444"
            color="white"
            borderRadius="5px"
          >
            <Text
              p="2.5px"
              _hover={{ color: "#ccc" }}
              onClick={() => navigate("/profile")}
            >
              Ver dados
            </Text>
            <Text p="2.5px" _hover={{ color: "#ccc" }} onClick={logout}>
              Sair
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
