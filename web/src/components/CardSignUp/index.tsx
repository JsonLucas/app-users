import { Box, Text, Button, Input, FormLabel, Image } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Field } from "../Field";
import { useForm } from "react-hook-form";
import { createUser } from "../../api/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { useUpload } from "../../hooks/useUpload";

export function CardSignUp() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<any>();
  const [previewImage, setPreviewImage] = useState<string>();
  const { fireBaseUpload } = useUpload();
  const onDrop = useCallback(async (file: any) => {
    const imageFile = file[0];
    if (imageFile) {
      const imagePreviewUrl = URL.createObjectURL(imageFile);
      setFile(imageFile);
      setPreviewImage(imagePreviewUrl);
    } else toast("Formato de arquivo não suportado.");
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    accept: { "image/png": [".png"], "image/jpg": [".jpg", ".jpeg"] },
  });
  const navigate = useNavigate();
  const signUp = async (data: any) => {
    const completeData = { ...data, picture: "" };
    setLoading(true);
    try {
      if (file) await fireBaseUpload(file, "create", completeData);
      else {
        const response = await createUser(completeData);
      }
      toast("Cadastro efetuado com sucesso!");
      navigate("/");
    } catch (e: any) {
      if (e.response) {
        toast(e.response.data);
      }
      console.log(e);
    }
    setLoading(false);
  };
  return (
    <Box
      w="350px"
      p="10px"
      borderRadius="7px"
      bgColor="#444"
      boxShadow="0px 0px 5px 1px rgba(0, 0, 0, 0.5)"
    >
      <Text p="15px" fontSize={25} textAlign="center" color="white">
        AppUsers - Cadastro
      </Text>
      <Box>
        <Field
          register={register}
          name="name"
          type="email"
          placeholder="Digite seu nome"
          disabled={loading}
        />
      </Box>
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
      <Box>
        <Field
          register={register}
          name="confirmPassword"
          type="password"
          placeholder="Confirme a senha"
          disabled={loading}
        />
      </Box>
      <Box
        border="1px dashed lightgrey"
        borderRadius="5px"
        minH="120px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        {...getRootProps()}
      >
        <FormLabel htmlFor="profile_picture" color="white">
          {!previewImage && <>Arraste uma foto ou clique aqui</>}
        </FormLabel>
        <Box display="flex" justifyContent="center" alignItems="center">
          {previewImage && <Image maxH="90%" maxW="60%" src={previewImage} />}
          <Input
            {...getInputProps({
              multiple: false,
              type: "file",
              name: "profile_picture",
              id: "profile_picture",
            })}
          />
        </Box>
      </Box>
      <Box w="50%" m="10px auto">
        <Button
          w="100%"
          p="10px"
          borderRadius="7px"
          bgColor="#1E90FF"
          color="white"
          border="none"
          onClick={handleSubmit(signUp)}
        >
          {!loading && <>Cadastrar</>}
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
        onClick={() => navigate("/")}
        color="white"
      >
        Já possui uma conta? Faça login!
      </Text>
    </Box>
  );
}
