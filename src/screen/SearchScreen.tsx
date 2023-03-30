import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Color } from "../constants/theme";
import Icon from "@expo/vector-icons/Ionicons";
import { useSearch } from "../hooks/useSearch";
import ItemCardVertical from "../components/ItemCardVertical";

export default function SearchScreen() {
  const initialPage = 1;
  const [valueInput, setValueInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(valueInput);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const { jobResults } = useSearch(debouncedValue, currentPage);

  const fetchMore = () => {
    setCurrentPage(debouncedValue === "" ? initialPage : currentPage + 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(valueInput);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [debouncedValue, valueInput]);

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Search job"
          style={styles.input}
          placeholderTextColor={Color.borderColor}
          value={valueInput}
          onChangeText={(value) => setValueInput(value)}
        />
        <Icon
          name="search"
          size={20}
          color={Color.borderColor}
          style={styles.iconSearch}
        />
      </View>
      <FlatList
        data={jobResults}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={() => fetchMore()}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => {
          return <ItemCardVertical item={item} />;
        }}
        ListFooterComponent={() => (
          <View
            style={[
              styles.loadingFooter,
              {
                opacity:
                  jobResults.length === 0 || debouncedValue === "" ? 0 : 1,
              },
            ]}
          >
            <ActivityIndicator size={30} color={Color.secondary} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    paddingHorizontal: 20,
  },
  containerInput: {
    paddingHorizontal: 20,
    justifyContent: "center",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.borderColor,
    height: 50,
    borderRadius: 25,
    color: Color.secondary,
    paddingHorizontal: 20,
  },
  iconSearch: {
    position: "absolute",
    right: 40,
  },
  loadingFooter: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
