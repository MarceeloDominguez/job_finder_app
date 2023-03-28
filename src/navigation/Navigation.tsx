import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Color } from "../constants/theme";
import HomeScreen from "../screen/HomeScreen";
import DetailsScreen from "../screen/DetailsScreen";
import SearchScreen from "../screen/SearchScreen";
import { Job } from "../interface/jobinterface";

export type RootStackParamsList = {
  HomeScreen: undefined;
  DetailsScreen: Job;
  SearchScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function Navigation() {
  return (
    <>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "none" }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </>
  );
}
