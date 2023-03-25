import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { Color, Font, Sizes } from "../constants/theme";

export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapInfoUser}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.location}>Buenos Aires</Text>
        </View>
      </View>
      <View style={styles.wrapIcon}>
        <View style={styles.containerIcon}>
          <Icon name="bookmark-outline" size={18} color={Color.secondary} />
        </View>
        <View style={styles.containerIcon}>
          <Icon
            name="notifications-outline"
            size={18}
            color={Color.secondary}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  wrapInfoUser: {
    flexDirection: "row",
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  name: {
    color: Color.secondary,
    fontSize: Sizes.medium,
    fontFamily: Font.regular,
    letterSpacing: 0.4,
    textTransform: "capitalize",
    marginBottom: 5,
  },
  location: {
    color: Color.secondary,
    opacity: 0.7,
    fontSize: Sizes.small,
    letterSpacing: 0.4,
    fontFamily: Font.regular,
  },
  wrapIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  containerIcon: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.secondary,
  },
});
