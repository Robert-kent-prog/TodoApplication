
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarColor: "#03396c",
        statusBarStyle: "light",
      }}
    />
  )

}
