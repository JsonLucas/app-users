import { Input } from "@chakra-ui/react";

interface Props {
  register: any;
  name: string;
  placeholder: string;
  disabled: boolean;
  type: "text" | "password" | "email";
}

export function Field({ register, name, placeholder, disabled, type }: Props) {
  return (
    <Input
      {...register(name)}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      w="100%"
      p="10px"
      borderRadius="7px"
      border="0.2px solid rgba(0,0,0,0.3)"
      mb="10px"
    />
  );
}
