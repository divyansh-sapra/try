import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export const LogoTitle = () => {
  return (
    <Image style={styles.image} source={require("../assets/favicon.png")} />
  );
};

export const ConditionScreen = ({ navigation, route }) => {
  const [count, setCount] = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => {
            setCount((c) => c + 1);
          }}
        >
          <Text>Update Count</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, setCount]);
  return (
    <View style={styles.container}>
      <Text> Condition Screen </Text>
      <Text>count: {count}</Text>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          navigation.navigate({
            name: "Detail",
            params: {
              surname: "Divyansh",
            },
            merge: true,
          });
        }}
      >
        <Text style={styles.textColor}> {route.params.name} </Text>
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
    backgroundColor: "red",
    padding: 10,
    marginTop: 10,
    width: 110,
    textAlign: "center",
    borderRadius: 5,
  },
  textColor: {
    color: "white",
    fontWeight: 700,
  },
  image: {
    width: 50,
    height: 50,
  },
});
