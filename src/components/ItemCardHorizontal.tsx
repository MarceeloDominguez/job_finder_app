import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { Color, Font, Sizes, WIDTH_SCREEN } from "../constants/theme";
import { Job } from "../interface/jobinterface";

type Prop = {
  item: Job;
};

export default function ItemCardHorizontal({ item }: Prop) {
  return (
    <View style={styles.card}>
      <View style={styles.wrapLogo}>
        {item.employer_logo ? (
          <Image
            source={{
              uri: item.employer_logo,
            }}
            style={styles.logo}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={{
              uri: "https://i.pinimg.com/564x/a1/a6/d0/a1a6d07762619ed6d38e11269f573d32.jpg",
            }}
            style={styles.logo}
            resizeMode="contain"
          />
        )}
        <Icon name="bookmark-outline" size={22} color={Color.secondary} />
      </View>
      <View style={styles.wrapInfoJob}>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={2} style={styles.employerName}>
            {item.employer_name}
          </Text>
          <Text numberOfLines={1} style={styles.jobTitle}>
            {item.job_title}
          </Text>
        </View>
        <Text style={styles.hour}>$23/hour</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.employmentTypeContainer}>
          <Text style={styles.employmentType}>{item.job_employment_type}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.card,
    width: WIDTH_SCREEN * 0.68,
    padding: 15,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: Color.borderColor,
    marginRight: 20,
  },
  wrapLogo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 6,
  },
  wrapInfoJob: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 10,
  },
  employerName: {
    color: Color.secondary,
    fontSize: Sizes.small,
    fontFamily: Font.regular,
    letterSpacing: 0.4,
    marginBottom: 5,
    lineHeight: 16,
    opacity: 0.8,
  },
  jobTitle: {
    color: Color.secondary,
    fontSize: Sizes.medium,
    fontFamily: Font.semiBold,
    letterSpacing: 0.4,
  },
  hour: {
    color: Color.secondary,
    fontFamily: Font.semiBold,
    fontSize: Sizes.small,
  },
  employmentTypeContainer: {
    backgroundColor: Color.secondary,
    height: 24,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 12,
  },
  employmentType: {
    color: Color.primary,
    fontSize: Sizes.small,
    fontFamily: Font.semiBold,
    letterSpacing: 0.4,
    textTransform: "capitalize",
  },
});
