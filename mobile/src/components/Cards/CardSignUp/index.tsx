import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
import { Field } from "../../Field";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { Styles } from "../styles";
import { ThreeDots } from "react-loader-spinner";
import { signUpUser } from "../../../api/users";
import { IoIosPersonAdd } from "react-icons/io";
import { useToast } from "../../../hooks/useToast";
import { useUpload } from "../../../hooks/useUpload";
import { Formik } from "formik";
import { SignUp } from "../../../interfaces/users";
import { signUpSchema } from "../../../schemas/user";

export function CardSignUp({ navigation }: any) {
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<string>();
  const { responseError, successResponse } = useToast();
  const { browseFile } = useUpload();
  const signUp = async (data: any) => {
    setLoading(true);
    try {
      await signUpUser(data);
      successResponse("Cadastrado efetuado com sucesso!");
      navigation.navigate("Login");
    } catch (e: any) {
      console.log(e);
      responseError(e);
    }
    setLoading(false);
  };

  const imagePicker = async () => {
    const file = await browseFile();
    console.log(file);
    setFile(file);
  };

  return (
    <View style={Styles.Container}>
      <View style={Styles.TopCardLabel}>
        <IoIosPersonAdd color="white" size={40} />
      </View>
      <View style={Styles.BoxField}>
        <Field
          control={control}
          name="name"
          placeholder="Digite seu nome"
          secureEntry={false}
        />
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
          placeholder="Entre com a senha"
          secureEntry={true}
        />
      </View>
      <View style={Styles.BoxField}>
        <Field
          control={control}
          name="confirmPassword"
          placeholder="Repita a senha"
          secureEntry={true}
        />
      </View>
      <View style={Styles.BoxField}>
        <TouchableOpacity style={Styles.Button} onPress={handleSubmit(signUp)}>
          {!loading && <Text style={{ textAlign: "center" }}>Entrar</Text>}
          {loading && <ThreeDots color="black" height="100%" />}
        </TouchableOpacity>
      </View>
      <Text
        style={Styles.SignUpText}
        onPress={() => navigation.navigate("Login")}
      >
        Já possui uma conta? Faça login!
      </Text>
    </View>
  );
}
