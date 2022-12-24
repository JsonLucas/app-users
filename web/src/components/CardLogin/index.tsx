import { Box, Text, Button } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Field } from "../Field";
import { useForm } from "react-hook-form";
import { signInUser } from "../../api/users";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AuthContext } from "../../contexts/auth";
import { useToast } from "../../hooks/useToast";

export function CardLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();
  const { setToken } = useLocalStorage();
  const { setLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const { successToast, errorToast } = useToast();
  const login = async (data: any) => {
    setLoading(true);
    try {
      const token = await signInUser(data);
	  setLogged(true);
      successToast("login efetuado com sucesso!");
	  setToken(token);
      navigate("/home");
    } catch (e: any) {
	  console.log(e);
	  errorToast(e);
    }
    setLoading(false);
  };
  return (
    <Box
      w="350px"
      p="10px"
      borderRadius="7px"
	  bgColor='#444'
      boxShadow="0px 0px 5px 1px rgba(0, 0, 0, 0.5)"
    >
		<Text p='15px' fontSize={25} textAlign='center' color='white'>AppUsers - Login</Text>
      <Box>
        <Field
          register={register}
          name="email"
          type="email"
          placeholder="Digite seu email"
          disabled={loading}
        />
      </Box>
      <Box>
        <Field
          register={register}
          name="password"
          type="password"
          placeholder="Digite sua senha"
          disabled={loading}
        />
      </Box>
      <Box w="50%" m="auto">
        <Button
          w="100%"
          p="10px"
          borderRadius="7px"
          bgColor="#1E90FF"
          color="white"
          border="none"
          onClick={handleSubmit(login)}
        >
          {!loading && <>Entrar</>}
          {loading && (
            <Box w="35%" m="auto">
              <ThreeDots color="white" width="100%" height="55%" />
            </Box>
          )}
        </Button>
      </Box>
      <Text
        p="5px"
        textAlign="center"
        cursor="pointer"
		color='white'
        onClick={() => navigate("/signup")}
      >
        Ainda não possui uma conta? Cadastre-se!
      </Text>
    </Box>
  );
}
