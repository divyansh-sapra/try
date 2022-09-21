import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  ActivityIndicator,
} from "react-native";


export const AIndicator = () => {
  let isRotate = true;
    return (
      <View style={styles.container}>
      <ActivityIndicator size="large" color="#FF69B4" animating={true} />
      </View>
    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  touchableOpacity: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 10,
    width: 110,
    textAlign: "center",
    borderRadius: 5,
  },
  text: {
    color: "blue",
    fontWeight: 700,
  },
  touchtext: {
    color: "white",
    fontWeight: 700,
  },
});
