import * as React from "react";
import { Button, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import {
  NavigationContainer,
  createNavigationContainerRef,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/Home";
import { DetailScreen } from "./screens/Detail";
import { ConditionScreen, LogoTitle } from "./screens/Conditions";
import { TabScreen } from "./screens/Tab";
import { DrawerScreen } from "./screens/Drawer";
import { RenderScreen } from "./screens/Render";
import { StorageScreen } from "./screens/Storage";
import { ModalScreen, ModalHomeScreen } from "./screens/Modal";
import { MultipleDrawers } from "./screens/MultipleDrawers";
import { Main } from "./screens/TabStack";
import { BackPress } from "./screens/OnBackPress";
import { UnfocusEffect } from "./screens/UnfocusEffect";
import { NavRef } from "./screens/NavRef";
import { DeepLinking } from "./screens/Linking";
import { Themes } from "./screens/Themes";
import { AIndicator } from "./screens/AIndicator";
import { HomeCard, ProfileCard } from "./screens/Card"
import { BottomTab } from "./screens/BottomTab";
import { TopTab } from "./screens/TopTab";

export let PageContext = React.createContext();
export const navRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();
const screenOption = {
  // headerStyle: {
  //   backgroundColor: "black",
  // },
  // headerTintColor: "white",
  // headerTitleStyle: {
  //   fontWeight: 800,
  // },
  // headerTitleAlign: "center",
  headerShown: true,
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 4000,
    damping: 2000,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.08,
    restSpeedThreshold: 0.08,
  },
};

const initialParams = {
  name: "Divyansh Sapra",
  id: "1811981116",
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    primary: "rgb(255, 145, 85)",
  },
};

let date = new Date();
let hours = date.getHours();

const App = () => {
  let [auth, setAuth] = React.useState(false);
  let [isDark, setIsDark] = React.useState(false);
  const values = { render: [auth, setAuth], theme: [isDark, setIsDark] };

  return (
    <PageContext.Provider value={values}>
      <NavigationContainer
        ref={navRef}
        theme={isDark ? DarkTheme : DefaultTheme}
      >
        <Stack.Navigator initialRouteName="TopTab" screenOptions={screenOption}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home Screen" }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
          <Stack.Screen
            name="Condition"
            component={ConditionScreen}
            initialParams={initialParams}
            options={{
              headerTitle: (props) => <LogoTitle {...props} />,
            }}
          />
          <Stack.Screen name="Tab" component={TabScreen} />
          <Stack.Screen name="Drawer" component={DrawerScreen} />
          <Stack.Screen name="Render" component={RenderScreen} />
          <Stack.Screen name="Storage" component={StorageScreen} />
          <Stack.Screen name="MultiDrawers" component={MultipleDrawers} />
          <Stack.Screen name="TabStack" component={Main} />
          <Stack.Screen name="BackPress" component={BackPress} />
          <Stack.Screen name="UnfocusEffect" component={UnfocusEffect} />
          <Stack.Screen name="NavRef" component={NavRef} />
          <Stack.Screen name="DeepLinking" component={DeepLinking} />
          <Stack.Screen name="Themes" component={Themes} />
          <Stack.Screen name="AIndicator" component={AIndicator} 
            options={{
              headerTitle: "Thanks",
              headerShadowVisible: false,
              headerRight: ()=>
                <TouchableOpacity
                  style={{marginRight: 10, backgroundColor: "#CCFF00", height: 36, width: 100, borderRadius: 4, justifyContent: "center"}}
                  onPress={()=>console.log("Thank you so much")}
                >
                  <Text style={{color: "black", fontWeight: "bold", alignSelf: "center"}}>Click Here</Text>
                </TouchableOpacity>
            }} 
          />
          <Stack.Screen name="HomeCard" component={HomeCard} options={{transitionSpec: {
            open: config,
            close: config,
          }}}/>
          <Stack.Screen name="ProfilesCard" component={ProfileCard} options={{animation:"fade"}}/>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="TopTab" component={TopTab} />
        </Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="ModalHome" component={ModalHomeScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </NavigationContainer>
    </PageContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 30,
    width: 30,
  },
});

export default App;
