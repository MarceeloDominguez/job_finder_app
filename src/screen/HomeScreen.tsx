import React, { useCallback } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Color, Font, Sizes } from "../constants/theme";
import * as SplashScreen from "expo-splash-screen";
import useCustomFonts from "../hooks/useCustomFonts";
import HeaderHome from "../components/HeaderHome";
import SelectJob from "../components/SelectJob";
import UrgentlyNeedJob from "../components/UrgentlyNeedJob";
import Icon from "@expo/vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  "HomeScreen"
>;

type Prop = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Prop) {
  const { fontsLoaded } = useCustomFonts();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderHome />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Find you big dream job</Text>
        </View>
        <TouchableOpacity
          style={styles.containerSearch}
          activeOpacity={1}
          onPress={() => navigation.navigate("SearchScreen")}
        >
          <View style={styles.wrapContent}>
            <Text style={styles.placeholder}>Search job</Text>
            <Icon name="search" size={20} color={Color.borderColor} />
          </View>
        </TouchableOpacity>
        <SelectJob />
        <UrgentlyNeedJob />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    flexGrow: 1,
  },
  containerTitle: {
    maxWidth: 250,
  },
  title: {
    color: Color.secondary,
    fontSize: Sizes.xLarge,
    fontFamily: Font.bold,
    letterSpacing: 0.4,
    lineHeight: 44,
    paddingHorizontal: 20,
  },
  containerSearch: {
    marginHorizontal: 20,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Color.borderColor,
    marginTop: 22,
    marginBottom: 18,
    justifyContent: "center",
  },
  wrapContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  placeholder: {
    color: Color.borderColor,
    fontFamily: Font.bold,
    letterSpacing: 0.4,
    fontSize: Sizes.small,
  },
});
