import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function First({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
}

function Second({ navigation }) {
  let [text, setText] = React.useState("");
  let hasChanged = Boolean(text);
  React.useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      if (!hasChanged) {
        return;
      }
      e.preventDefault();
      let confirm = window.confirm("Discard Changes");
      if (confirm) {
        navigation.dispatch(e.data.action);
      }
    });
    return navigation.addListener("blur", ()=> {
      setText("");
    })
  }, [navigation, hasChanged]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi</Text>
      <TextInput value={text} onChangeText={setText} />
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate("First")}
      >
        <Text style={styles.touchtext}>Navigate to Second</Text>
      </TouchableOpacity>
    </View>
  );
}

export const BackPress = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Second" component={Second} />
      <Stack.Screen name="First" component={First} />
    </Stack.Navigator>
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
