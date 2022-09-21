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
import { prefix } from "../App";
import * as Linking from "expo-linking";

const Stack = createNativeStackNavigator();

function First() {
    return (
        <View>
            <TouchableOpacity
                onPress={()=>Linking.openURL("https://youtube.com")}
            >
                <Text>Link</Text>
            </TouchableOpacity>
        </View>
    );
}

function Second() {
    <View>
        <Text>Yes</Text>
    </View>
}

export const DeepLinking = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="First" component={First} />
            <Stack.Screen name="Second" component={Second} />
        </Stack.Navigator>
    );
}