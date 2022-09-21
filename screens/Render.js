import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PageContext } from "../App";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SignInScreen({ navigation }) {
  const { render, theme } = React.useContext(PageContext);
  let [auth, setAuth] = render;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacity}>
        <Text
          style={styles.touchtext}
          onPress={() => {
            setAuth(true);
          }}
        >
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.touchtext}>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ navigation }) {
  let [auth, setAuth] = React.useContext(PageContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          setAuth(false);
        }}
      >
        <Text style={styles.touchtext}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

export const RenderScreen = () => {
  const [auth, setAuth] = React.useContext(PageContext);
  return auth ? (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let screenName;
          if (route.name === "Home") {
            screenName = focused ? "home" : "home-outline";
          }
          return <Ionicons name={screenName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
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
