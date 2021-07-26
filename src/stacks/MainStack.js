import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Register from '../screens/Register';
import MainTab from './MainTab';
import BarberScreen from '../screens/Barber';

const Stack = createStackNavigator();
const { Navigator } = Stack;

export default () => (
    <Navigator
        screenOptions={{
            initRouteName: 'Preload',
            headerShown: false
        }}
    >
        <Stack.Screen name='Preload' component={Preload} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='MainTab' component={MainTab} />
        <Stack.Screen name='Barber' component={BarberScreen} />
    </Navigator>
);