import { useFonts } from "expo-font";

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    Bold: require("../../assets/fonts/Rubik-Bold.ttf"),
    SemiBold: require("../../assets/fonts/Rubik-SemiBold.ttf"),
    Regular: require("../../assets/fonts/Rubik-Regular.ttf"),
  });

  return { fontsLoaded };
}
