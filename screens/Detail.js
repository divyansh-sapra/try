import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const DetailScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Text>{JSON.stringify(route.params)}</Text>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.textColor}>Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() =>
          navigation.navigate("Condition", { name: "Divyansh", id: "1116" })
        }
      >
        <Text style={styles.textColor}>Condition Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      >
        <Text style={styles.textColor}>Update Title</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.setOptions({ headerShown: false })}
      >
        <Text style={styles.textColor}>Hide Header</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableOpacity: {
    backgroundColor: "green",
    padding: 10,
    marginTop: 20,
    width: 110,
    textAlign: "center",
    borderRadius: 5,
  },
  textColor: {
    color: "white",
    fontWeight: 700,
  },
});
