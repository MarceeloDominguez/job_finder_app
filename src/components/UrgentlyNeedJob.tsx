import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Color, Font, Sizes } from "../constants/theme";
import { useFetchUrgentlyNeedJob } from "../hooks/useFetchUrgentlyNeedJob";
import ItemCardVertical from "./ItemCardVertical";

export default function UrgentlyNeedJob() {
  const { urgentlyNeedJob, loading, error } =
    useFetchUrgentlyNeedJob("React js");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Urgently Need</Text>
      {error && <Text style={styles.error}>Error</Text>}

      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={40} color={Color.secondary} />
        </View>
      ) : (
        <>
          {urgentlyNeedJob?.map((item, index) => {
            return <ItemCardVertical key={index} item={item} />;
          })}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    color: Color.secondary,
    fontSize: Sizes.large,
    fontFamily: Font.bold,
    marginTop: 30,
    marginBottom: 20,
  },
  // card: {
  //   backgroundColor: Color.tertiary,
  //   borderRadius: 18,
  //   padding: 15,
  //   borderWidth: 2,
  //   borderColor: Color.borderColor,
  //   marginBottom: 12,
  // },
  // wrapLogo: {
  //   flexDirection: "row",
  //   gap: 10,
  // },
  // logo: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 5,
  // },
  // wrapInfo: {
  //   flex: 1,
  // },
  // employerName: {
  //   color: Color.secondary,
  //   fontSize: Sizes.small,
  //   fontFamily: Font.regular,
  //   letterSpacing: 0.4,
  //   marginBottom: 5,
  //   lineHeight: 16,
  //   opacity: 0.8,
  // },
  // jobTitle: {
  //   color: Color.secondary,
  //   fontSize: Sizes.medium,
  //   fontFamily: Font.semiBold,
  //   letterSpacing: 0.4,
  // },
  // wrapFooterInfo: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginTop: 20,
  // },
  // employmentTypeContainer: {
  //   backgroundColor: Color.secondary,
  //   height: 24,
  //   justifyContent: "center",
  //   paddingHorizontal: 10,
  //   borderRadius: 12,
  //   marginTop: 12,
  // },
  // employmentType: {
  //   color: Color.primary,
  //   fontSize: Sizes.small,
  //   fontFamily: Font.semiBold,
  //   letterSpacing: 0.4,
  //   textTransform: "capitalize",
  // },
  // jobcountry: {
  //   color: Color.secondary,
  //   fontFamily: Font.regular,
  //   letterSpacing: 0.3,
  // },
  loading: {
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "red",
    fontSize: 18,
    height: 130,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: Font.bold,
  },
});
