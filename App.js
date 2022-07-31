import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Fund from "./components/Fund";
import Flowchart from "./components/flowchart";
import CardPage from "./components/cardpage";

const Stack = createStackNavigator();

export default function App() {

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Fund" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Fund" component={Fund} />
                    <Stack.Screen name="Flowchart" component={Flowchart} />
                    <Stack.Screen name="CardPage" component={CardPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>

    )
};





