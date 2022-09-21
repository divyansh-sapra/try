import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { PageContext } from "../App";

export const Themes = () => {
  const { render, theme } = React.useContext(PageContext);
  let [isDark, setIsDark] = theme;
  let Light = "light";
  let Dark = "dark";
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsDark(!isDark)}>
        <Text style={styles.text}>{isDark ? Light : Dark}</Text>
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
