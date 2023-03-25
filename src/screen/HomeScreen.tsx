import React, { useCallback } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Color, Font, Sizes } from "../constants/theme";
import * as SplashScreen from "expo-splash-screen";
import useCustomFonts from "../hooks/useCustomFonts";
import HeaderHome from "../components/HeaderHome";

export default function HomeScreen() {
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
      <ScrollView>
        <HeaderHome />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Find you big dream job</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    flexGrow: 1,
    paddingHorizontal: 20,
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
  },
});
