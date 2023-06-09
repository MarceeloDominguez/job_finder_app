import React from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Job } from "../interface/jobinterface";
import { Color, Font, Sizes } from "../constants/theme";
import Icon from "@expo/vector-icons/Ionicons";

type Prop = {
  item: Job;
};

export default function ItemCardVertical({ item }: Prop) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() =>
          navigation.dispatch(CommonActions.navigate("DetailsScreen", item))
        }
      >
        <View style={styles.wrapLogo}>
          <Image
            source={{
              uri: item.employer_logo
                ? item.employer_logo
                : "https://i.pinimg.com/564x/a1/a6/d0/a1a6d07762619ed6d38e11269f573d32.jpg",
            }}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.wrapInfo}>
            <Text numberOfLines={1} style={styles.employerName}>
              {item.employer_name}
            </Text>
            <Text numberOfLines={1} style={styles.jobTitle}>
              {item.job_title}
            </Text>
          </View>
        </View>
        <View style={styles.wrapFooterInfo}>
          <View style={styles.employmentTypeContainer}>
            <Text style={styles.employmentType}>
              {item.job_employment_type}
            </Text>
          </View>
          <Text style={styles.jobcountry}>
            <Icon name="location" size={15} color={Color.secondary} />{" "}
            {item.job_city ? item.job_city : item.job_state}/{item.job_country}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.tertiary,
    borderRadius: 18,
    padding: 15,
    borderWidth: 2,
    borderColor: Color.borderColor,
    marginBottom: 12,
  },
  wrapLogo: {
    flexDirection: "row",
    gap: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  wrapInfo: {
    flex: 1,
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
  wrapFooterInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
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
  jobcountry: {
    color: Color.secondary,
    fontFamily: Font.regular,
    letterSpacing: 0.3,
  },
});
