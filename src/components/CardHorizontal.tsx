import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Color, Font, Sizes } from "../constants/theme";
import { useFetch } from "../hooks/useFetch";
import ItemCardHorizontal from "./ItemCardHorizontal";

type Prop = {
  selectTypeJob: string;
};

export default function CardHorizontal({ selectTypeJob }: Prop) {
  const { typeJob, loading, error } = useFetch(selectTypeJob);

  return (
    <View>
      <Text style={styles.title}>Urgently Need</Text>
      {error && <Text style={styles.error}>Error</Text>}
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={40} color={Color.secondary} />
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.containerCards}
        >
          {typeJob?.map((item, index) => {
            return <ItemCardHorizontal item={item} key={index} />;
          })}
          <View style={styles.finalSpace} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Color.secondary,
    fontSize: Sizes.large,
    fontFamily: Font.bold,
    letterSpacing: 0.4,
    marginVertical: 20,
    paddingLeft: 20,
  },
  containerCards: {
    paddingHorizontal: 20,
  },
  finalSpace: {
    width: 20,
    height: 20,
  },
  loading: {
    height: 150,
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
