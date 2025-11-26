import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import AerodromeList from "./components/AerodromeList";
import AerodromeDetail from "./components/AerodromeDetail";
import VFRScreen from "./components/VFRScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Skymaps Aviation" }} />
        <Stack.Screen name="Aerodromes" component={AerodromeList} options={{ title: "Aeródromos" }} />
        <Stack.Screen name="Detail" component={AerodromeDetail} options={{ title: "Ficha aeródromo" }} />
        <Stack.Screen name="VFR" component={VFRScreen} options={{ title: "Reglas y Procedimientos VFR" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
