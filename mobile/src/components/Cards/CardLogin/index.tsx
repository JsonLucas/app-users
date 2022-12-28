import { Text, TouchableOpacity, View } from "react-native";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Field } from "../../Field";
import { Styles } from "../styles";
import { ThreeDots } from "react-loader-spinner";
import { signInUser } from "../../../api/users";
import { useToken } from "../../../hooks/useToken";
import { LoggedContext } from "../../../contexts/logged";
import { IoIosPerson } from 'react-icons/io';
import Toast from "react-native-toast-message";
import { useToast } from "../../../hooks/useToast";

export function CardLogin({ navigation }: any) {
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const { setIsLogged } = useContext(LoggedContext);
  const { setToken } = useToken();
  const { responseError, successResponse } = useToast();
  const login = async (data: any) => {
	setLoading(true);
	try{
		const response = await signInUser(data);
		await setToken(response);
		setIsLogged(true);
		successResponse('Sucesso ao fazer login');
		navigation.navigate('Home');
	}catch(e: any){
		console.log(e);
		responseError(e);
	}
	setLoading(false);
  };
  return (
    <View style={Styles.Container}>
      <View style={Styles.TopCardLabel}>
		<IoIosPerson color='white' size={40} />
	  </View>
      <View style={Styles.BoxField}>
        <Field
          control={control}
          name="email"
          placeholder="Digite seu email"
          secureEntry={false}
        />
      </View>
      <View style={Styles.BoxField}>
        <Field
          control={control}
          name="password"
          placeholder="Digite sua senha"
          secureEntry={true}
        />
      </View>
      <View style={Styles.BoxField}>
        <TouchableOpacity style={Styles.Button} onPress={handleSubmit(login)}>
          {!loading && <Text style={{ textAlign: "center" }}>Entrar</Text>}
          {loading && <ThreeDots color="black" height="100%" />}
        </TouchableOpacity>
      </View>
      <Text
        style={Styles.SignUpText}
        onPress={() => navigation.navigate("SignUp")}
      >
        Não possui uma conta? Cadastre-se!
      </Text>
    </View>
  );
}
