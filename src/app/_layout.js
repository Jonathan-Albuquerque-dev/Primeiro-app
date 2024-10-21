import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="cadastro"
        options={{ headerShown: true, headerTitle: "Cadastrar" }}
      />
      <Stack.Screen name="(logado)" options={{ headerShown: false }} />
    </Stack>
  );
}
