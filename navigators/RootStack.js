import react from 'react';

//react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import  KatlendarLogin  from './../Screens/KatlendarLogin';
import  KatlendarSignup from './../Screens/KatlendarSignup';
import KatlendarCalendar from '../Screens/KatlendarCalendar';
import KatlendarPrivacyPolicy from '../Screens/KatlendarPrivacyPolicy';
//import KatlendarHomepage from '../Screens/KatlendarHomepage';


const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <StatusBar hidden = {true}/>
            <Stack.Navigator initialRouteName="KatlendarPrivacyPolicy">
                <Stack.Screen name = "Policy" component = {KatlendarPrivacyPolicy} />
                <Stack.Screen name = "Login" component = {KatlendarLogin} />
                <Stack.Screen name = "Signup" component = {KatlendarSignup} />
                <Stack.Screen name = "Home" component = {KatlendarCalendar} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;