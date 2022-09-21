import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const BTab = createMaterialBottomTabNavigator();
const screenOptions = {
    backgroundColor: "red"
}
const barStyles = {
    backgroundColor: "black",
    paddingBottom: 0,
}
const titles = {
    home: "Home",
    profile: "Profile",
    settings: "Settings",
    help: "Help"
}
const icons = {
    home: "home",
    profile: "account",
    settings: "tools",
    help: "help"
}

function HomeBottomTab({navigation}) {
    return (
        <View>
            <TouchableOpacity
                onPress={()=> navigation.jumpTo('ProfileBottomTab')}
            >
            <Text>
                In Home
            </Text>
            </TouchableOpacity>
        </View>
    );
};

function ProfileBottomTab() {
    return (
        <View>
            <Text>
                In Profile
            </Text>
        </View>
    );
};

function SettingBottomTab() {
    return (
        <View>
            <Text>
                In Settings
            </Text>
        </View>
    );
};

function HelpBottomTab() {
    return (
        <View>
            <Text>
                In Help
            </Text>
        </View>
    );
};

export const BottomTab = () => {
    return (
        <BTab.Navigator shifting={false} screenOptions={{tabBarColor: "black"}} labeled={true} activeColor="lightblue" inactiveColor="grey" barStyle={barStyles}>
            <BTab.Screen name="HomeBottomTab" component={HomeBottomTab} options={{title: titles.home, tabBarIcon: icons.home, tabBarBadge: "H"}}/>
            <BTab.Screen name="ProfileBottomTab" component={ProfileBottomTab} options={{title: titles.profile, tabBarIcon: icons.profile, tabBarBadge: "P", }}/>
            <BTab.Screen name="SettingBottomTab" component={SettingBottomTab} options={{title: titles.settings, tabBarIcon: icons.settings, tabBarBadge: "S"}}/>
            <BTab.Screen name="HelpBottomTab" component={HelpBottomTab} options={{title: titles.help, tabBarIcon: icons.help, tabBarBadge: "H"}}/>
        </BTab.Navigator>
    );
}

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