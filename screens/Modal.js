import * as React from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

export function ModalHomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={()=>navigation.navigate('Modal')}
            >
                <Text style = {styles.touchtext}>Navigate to Modal</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Currently in Modal Home Screen</Text>
        </View>
    )
}

export function ModalScreen({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={()=>navigation.goBack()}
            >
                <Text style = {styles.touchtext}>Go Back?</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Currently in Modal Screen</Text>
        </View>
    )
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