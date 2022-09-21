import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

const RightDraw = createDrawerNavigator();
const LeftDraw = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.getParent('rightDraw').openDrawer()}
      >
        <Text style={styles.touchtext}>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

function LeftDrawer() {
  return (
    <LeftDraw.Navigator
      useLegacyImplementation
      screenOptions={{ drawerPosition: "left"}}
    >
      <LeftDraw.Screen name="Home" component={HomeScreen} />
    </LeftDraw.Navigator>
  );
}

function RightDrawContent() {
    return (
        <View>
            <Text>This is good thing to know</Text>
        </View>
    )
}

function RightDrawer({ navigation }) {
  return (
    <RightDraw.Navigator
      useLegacyImplementation
      id="rightDraw"
      screenOptions={{ drawerPosition: "right", headerShown: false }}
      drawerContent = {(props) => <RightDrawContent {...props} />}
    >
      <RightDraw.Screen name="HomeDraw" component={LeftDrawer} />
    </RightDraw.Navigator>
  );
}

export const MultipleDrawers = () => {
  return <RightDrawer />;
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
