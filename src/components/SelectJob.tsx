import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Color, Font } from "../constants/theme";
import CardHorizontal from "./CardHorizontal";

const typeJobs = [
  "Web Developer",
  "UI/UX",
  "Public Relation",
  "Graphic Design",
  "React Native Developer",
];

export default function SelectJob() {
  const [selectTypeJob, setSelectTypeJob] = useState("Web Developer");

  return (
    <View>
      <View style={styles.wrapButton}>
        {typeJobs.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectTypeJob(item)}
              activeOpacity={0.8}
              style={[
                styles.containerButton,
                {
                  backgroundColor:
                    selectTypeJob === item ? Color.secondary : Color.tertiary,
                },
              ]}
            >
              <Text
                style={[
                  styles.titleButton,
                  {
                    color:
                      selectTypeJob === item ? Color.tertiary : Color.secondary,
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <CardHorizontal selectTypeJob={selectTypeJob} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapButton: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 8,
    columnGap: 12,
    marginBottom: 6,
    paddingHorizontal: 20,
  },
  containerButton: {
    marginTop: 5,
    paddingHorizontal: 10,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35 / 2,
  },
  titleButton: {
    fontFamily: Font.semiBold,
    letterSpacing: 0.3,
  },
});
