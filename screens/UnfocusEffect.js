import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function First() {
  const isFocused = useIsFocused();
  return (
    <View>
      <Text>{isFocused ? "focused" : "Not focused"}</Text>
    </View>
  );
}

function Second() {
  useFocusEffect(
    React.useCallback(() => {
      alert("focuesed");
      return () => {
        alert("unfocused");
      };
    }, [])
  );
  return <View />;
}

export const UnfocusEffect = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="First" component={First} />
      <Tab.Screen name="Second" component={Second} />
    </Tab.Navigator>
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
