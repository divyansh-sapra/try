import * as React from "react";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

export function ProfileCard() {
    return (
        <View>
            <Text style={styles.text}>
                Divyansh
            </Text>
        </View>
    );
};

export function HomeCard({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={()=>navigation.navigate('ProfilesCard')}
      >
        <Text style={styles.touchtext}>Click Here</Text>
      </TouchableOpacity>
    </View>
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
