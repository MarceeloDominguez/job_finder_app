import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, Font, Sizes } from "../constants/theme";

type Prop = {
  title: string;
  informationJob: string[] | undefined;
};

export default function AboutJob({ title, informationJob }: Prop) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        {informationJob?.map((item, index) => {
          return (
            <View key={index} style={styles.wrapInformation}>
              <Text style={styles.asterisk}>*</Text>
              <Text style={styles.itemInfoJob}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    marginBottom: 10,
    color: Color.secondary,
    fontSize: Sizes.medium,
    letterSpacing: 0.4,
    fontFamily: Font.semiBold,
  },
  wrapInformation: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  itemInfoJob: {
    color: Color.secondary,
    opacity: 0.8,
    fontFamily: Font.regular,
    lineHeight: 18,
  },
  asterisk: {
    color: Color.secondary,
    opacity: 0.8,
  },
});
