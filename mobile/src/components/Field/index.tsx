import { useController } from "react-hook-form";
import { TextInput } from "react-native";
import { Styles } from "./styles";

interface props {
  control: any;
  name: string;
  placeholder: string;
  secureEntry: boolean;
  validateInput?: {
    handleChange: (e: any) => void;
    handleBlur: (e: any) => void;
    handleSubmit: (e: any) => void;
    values: any;
  };
}

export function Field({ control, secureEntry, name, placeholder, validateInput, }: props) {
  const { field } = useController({ control, name });
  return (
    <TextInput
      style={Styles.Field}
      placeholder={placeholder}
      onChangeText={(e) => {
        field.onChange(e);
        validateInput?.handleChange(e);
      }}
      onBlur={validateInput?.handleBlur}
      secureTextEntry={secureEntry}
    />
  );
}
