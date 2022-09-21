import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const SettingStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Details Screen</Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.touchtext}>Navigate to Details</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Currently in Profile Screen</Text>
    </View>
  );
}

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
            <ProfileStack.Screen name="Details" component={DetailScreen}/>
        </ProfileStack.Navigator>
    )
}

function SettingStackScreen() {
    return (
        <SettingStack.Navigator>
        <SettingStack.Screen name="Settings" component={SettingScreen}/>
        <SettingStack.Screen name="Details" component={DetailScreen}/>
        </SettingStack.Navigator>
    )
}

function SettingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.touchtext}>Navigate to Details</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Currently in Setting Screen</Text>
    </View>
  );
}

export const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let sized;
          if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
            sized = focused ? 35 : 25;
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
            sized = focused ? 30 : 25;
          }
          return <Ionicons name={iconName} size={sized} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
      <Tab.Screen
        name="Settings"
        component={SettingStackScreen}
        options={{ tabBarBadge: 5 }}
      />
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
