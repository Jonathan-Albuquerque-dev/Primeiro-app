import { TextInput } from "react-native";

export default function Input() {
  return (
    <TextInput
      style={{
        width: "100%",
        height: 40,
        backgroundColor: "gray",
        borderColor: "black",
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
      }}
    />
  );
}
