import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { Color } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

export default function HeaderDetailsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.containerIcon}>
      <Icon
        name="chevron-back-outline"
        size={24}
        color={Color.secondary}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.wrapIconsRight}>
        <View style={styles.wrapIcon}>
          <Icon name="bookmark-outline" size={18} color={Color.secondary} />
        </View>
        <View style={styles.wrapIcon}>
          <Icon name="share-social-outline" size={18} color={Color.secondary} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  wrapIconsRight: {
    flexDirection: "row",
    gap: 8,
  },
  wrapIcon: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.secondary,
  },
});
