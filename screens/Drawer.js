import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate("Notification")}
      >
        <Text style={styles.touchtext}>Go to Notification Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={styles.touchtext}>Toggle Drawer</Text>
      </TouchableOpacity>
      <Text>Currently at Home Screen</Text>
    </View>
  );
}

function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.touchtext}>Go to Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={styles.touchtext}>Open Drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.closeDrawer()}
      >
        <Text style={styles.touchtext}>Close Drawer</Text>
      </TouchableOpacity>
      <Text>Currently at Notification Screen</Text>
    </View>
  );
}

export const DrawerScreen = () => {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
    </Drawer.Navigator>
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