import * as React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

const BTab = createMaterialTopTabNavigator();
const screenOptions = {

};

function HomeTopTab1({navigation}) {
    return (
        <View>
            <TouchableOpacity
                onPress={()=> navigation.jumpTo('ProfileTopTab')}
            >
            <Text>
                In Home
            </Text>
            </TouchableOpacity>
        </View>
    );
};

function ProfileTopTab1() {
    return (
        <View>
            <Text>
                In Profile
            </Text>
        </View>
    );
};

function SettingTopTab1() {
    return (
        <View>
            <Text>
                In Settings
            </Text>
        </View>
    );
};

function HelpTopTab1() {
    return (
        <View>
            <Text>
                In Help
            </Text>
        </View>
    );
};

function HomeTopTab({navigation}) {
    return (
        <View>
            <TouchableOpacity
                onPress={()=> navigation.jumpTo('ProfileTopTab')}
            >
            <Text>
                In Home
            </Text>
            </TouchableOpacity>
        </View>
    );
};

function ProfileTopTab() {
    return (
        <View>
            <Text>
                In Profile
            </Text>
        </View>
    );
};

function SettingTopTab() {
    return (
        <View>
            <Text>
                In Settings
            </Text>
        </View>
    );
};

function HelpTopTab() {
    return (
        <View>
            <Text>
                In Help
            </Text>
        </View>
    );
};

export const TopTab = () => {
    return (
    <BTab.Navigator tabBarPosition= "top" screenOptions={{tabBarStyle: {backgroundColor: "black"}, tabBarLabelStyle:{fontWeight: "bold"}, tabBarActiveTintColor: "white", tabBarInactiveTintColor: "grey", tabBarItemStyle:{width: "5"}, tabBarBounces: true, tabBarIndicatorStyle: false, tabBarIndicator:(props)=>props.width=0}} transitionStyle="scroll">
            <BTab.Screen name="HomeTopTab" component={HomeTopTab} options={{title:"Home"}}/>
            <BTab.Screen name="ProfileTopTab" component={ProfileTopTab} options={{title:"Profile"}}/>
            <BTab.Screen name="SettingTopTab" component={SettingTopTab} options={{title:"Settings"}}/>
            <BTab.Screen name="HelpTopTab" component={HelpTopTab} options={{title:"Help"}}/>
            <BTab.Screen name="HomeTopTab1" component={HomeTopTab1} options={{title:"Home"}}/>
            <BTab.Screen name="ProfileTopTab1" component={ProfileTopTab1} options={{title:"Profile"}}/>
            <BTab.Screen name="SettingTopTab1" component={SettingTopTab1} options={{title:"Settings"}}/>
            <BTab.Screen name="HelpTopTab1" component={HelpTopTab1} options={{title:"Help"}}/>
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