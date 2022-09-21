import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navRef } from "../App";

const Stack = createNativeStackNavigator();

function navigate(name, params) {
    if(navRef.isReady()) {
        navRef.navigate(name, params);
    }
}

function First() {
    return (
        <View>
            <TouchableOpacity onPress={()=>navigate("Second", {name:"Divyansh"})}>
                <Text>Navigate</Text>
            </TouchableOpacity>
        </View>
    );
}

function Second({route}) {
    return (
        <View>
            <Text>{route.name}</Text>
        </View>
    );
}

export const NavRef = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="First" component={First}/>
            <Stack.Screen name="Second" component={Second}/>
        </Stack.Navigator>
    );
}