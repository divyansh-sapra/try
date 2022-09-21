import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

export const HomeScreen = ({ route, navigation }) => {
  React.useEffect(() => {
    navigation.addListener('blur', ()=>{
      console.log("hello");
    })
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() =>
          navigation.navigate("Detail", { name: "Divyansh", id: "1116" })
        }
      >
        <Text style={styles.textColor}>Detail Screen</Text>
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
    backgroundColor: "red",
    padding: 10,
    marginTop: 10,
    width: 110,
    textAlign: "center",
    borderRadius: 5,
  },
  textColor: {
    color: "white",
    fontWeight: 700,
  },
});
