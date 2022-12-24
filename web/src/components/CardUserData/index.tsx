import { Box, Text, Image, Input, FormLabel, Button } from "@chakra-ui/react";
import { IoIosCamera } from "react-icons/io";
import { useState, useCallback, useEffect } from "react";
import { useStorage } from "../../hooks/useStorage";
import { IUser, User } from "../../interfaces/users";
import { useToast } from "../../hooks/useToast";
import dayjs from "dayjs";
import { ThreeDots } from "react-loader-spinner";

interface props {
  profile: User;
}

export function CardUserData({ profile }: props) {
  const { updatePicture, getPicture } = useStorage();
  const [alterPicture, setAlterPicture] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>();
  const [imageFile, setImageFile] = useState<any>();
  const { successToast, errorToast } = useToast();
  const onChange = useCallback(async ({ target }: any) => {
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    const file = target.files[0];
    if (
      allowedTypes.find((item) => {
        return item === file.type;
      })
    ) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewImage(fileUrl);
      setImageFile(file);
    } else {
      errorToast({ message: "file format not supported" });
    }
  }, []);

  const upload = async () => {
    setLoading(true);
    try {
      await updatePicture(imageFile, profile.previousPictureId);
      successToast("Imagem de perfil alterada com sucesso!");
    } catch (e: any) {
      console.log(e);
      errorToast(e);
    }
    setPreviewImage(undefined);
    setImageFile(undefined);
    setLoading(false);
  };
  return (
    <Box w="95%" m="25px auto">
      <Box display="flex" flexDir="column">
        <Box
          bgColor="grey"
          w="200px"
          h="200px"
          borderRadius="50%"
          position="relative"
          overflow="hidden"
          onMouseEnter={() => setAlterPicture(true)}
          onMouseLeave={() => setAlterPicture(false)}
        >
          <Image
            src={previewImage ? previewImage : profile.picture}
            w="100%"
            h="100%"
            alt="imagem não carregada"
          />
          <FormLabel
            bgColor="rgba(220, 220, 220, 0.3)"
            w="100%"
            h="35px"
            position="absolute"
            bottom="0px"
            display={alterPicture ? "flex" : "none"}
            justifyContent="center"
            cursor="pointer"
          >
            <Input
              type="file"
              multiple={false}
              onChange={onChange}
              name="picture"
              id="picture"
              display="none"
            />
            <IoIosCamera size={19} />
            <Text>Alterar foto</Text>
          </FormLabel>
        </Box>
        {previewImage && (
          <Box
            m="10px"
            display="flex"
            flexDir="column"
            maxW="170px"
            h="75px"
            justifyContent="space-between"
          >
            <Button
              p="8px"
              border="none"
              bgColor="grey"
              borderRadius="5px"
              cursor="pointer"
              color="white"
              onClick={upload}
            >
              {loading && (
                <Box w="35%" m="auto">
                  <ThreeDots color="white" width="100%" height="55%" />
                </Box>
              )}
              {!loading && <>Concluir upload</>}
            </Button>
            <Button
              p="8px"
              border="none"
              bgColor="darkred"
              borderRadius="5px"
              cursor="pointer"
              color="white"
              onClick={() => setPreviewImage(undefined)}
            >
              Limpar
            </Button>
          </Box>
        )}
        <Box ml="10px" color="white" display="flex" flexDir="column">
          <Box display="flex">
            Nome:
            <Text pl="5px" fontWeight="bold">
              {profile.name}
            </Text>
          </Box>
          <Box display="flex">
            Email:
            <Text pl="5px" fontWeight="bold">
              {profile.email}
            </Text>
          </Box>
          <Box display="flex">
            Criado em:
            <Text pl="5px" fontWeight="bold">
              {dayjs(profile.createdAt).format("DD/MM/YYYY")}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
