import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from "react-native";
import { Color, Font, Sizes } from "../constants/theme";
import Icon from "@expo/vector-icons/Ionicons";
import HeaderDetailsScreen from "../components/HeaderDetailsScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { useFetchJobById } from "../hooks/useFetchJobById";
import AboutJob from "../components/AboutJob";

interface Prop
  extends NativeStackScreenProps<RootStackParamsList, "DetailsScreen"> {}

export default function DetailsScreen({ route }: Prop) {
  const item = route.params;
  const { job_id } = item;
  const { jobDetails, loading } = useFetchJobById(job_id);

  const {
    employer_logo,
    employer_name,
    job_employment_type,
    job_city,
    job_country,
    job_is_remote,
    job_google_link,
    job_highlights,
  } = jobDetails;

  if (loading)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={30} color={Color.secondary} />
      </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderDetailsScreen />
        <View>
          <Image
            source={{
              uri: employer_logo
                ? employer_logo
                : "https://randomuser.me/api/portraits/men/1.jpg",
            }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text numberOfLines={1} style={styles.employerName}>
            {employer_name}
          </Text>
          <Text numberOfLines={2} style={styles.jobTitle}>
            {jobDetails.job_title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.employmentTypeContainer}>
              <Text style={styles.employmentType}>{job_employment_type}</Text>
            </View>
          </View>
          <View style={styles.wrapContentJobRemotoEndLocation}>
            <Text style={styles.jobRemoto}>
              Job Remoto: {job_is_remote ? "Yes" : "No"}
            </Text>
            <View style={styles.wrapLocation}>
              <Icon name="location" size={15} color={Color.secondary} />
              <Text style={styles.location}>
                {job_city ? job_city : "Unspecified"}/
                {job_country ? job_country : "Unspecified"}
              </Text>
            </View>
          </View>
          <AboutJob
            title="Description"
            informationJob={
              job_highlights?.Qualifications ?? ["No data provided"]
            }
          />
          <AboutJob
            title="Responsibilities"
            informationJob={
              job_highlights?.Responsibilities ?? ["No data provided"]
            }
          />
          <AboutJob
            title="Benefits"
            informationJob={job_highlights?.Benefits ?? ["No data provided"]}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonLink}
        activeOpacity={0.8}
        onPress={() => Linking.openURL(job_google_link)}
      >
        <Text style={styles.textButtonLink}>Apply for job</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    paddingHorizontal: 20,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginBottom: 20,
  },
  employerName: {
    color: Color.secondary,
    fontSize: Sizes.medium,
    fontFamily: Font.regular,
    letterSpacing: 0.4,
    marginBottom: 5,
    lineHeight: 16,
    opacity: 0.8,
  },
  jobTitle: {
    color: Color.secondary,
    fontSize: Sizes.large,
    fontFamily: Font.semiBold,
    letterSpacing: 0.4,
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
  wrapContentJobRemotoEndLocation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
    marginBottom: 18,
  },
  jobRemoto: {
    color: Color.secondary,
    fontFamily: Font.semiBold,
    letterSpacing: 0.4,
    fontSize: Sizes.small,
  },
  wrapLocation: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  location: {
    color: Color.secondary,
    fontFamily: Font.semiBold,
    letterSpacing: 0.4,
    fontSize: Sizes.small,
  },
  buttonLink: {
    height: 50,
    backgroundColor: "#fa6b05",
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonLink: {
    color: Color.secondary,
    fontFamily: Font.bold,
    letterSpacing: 0.4,
  },
  loading: {
    flex: 1,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
