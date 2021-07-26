import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import AppointementsScreen from '../screens/Appointments';
import FavoritesScreen from '../screens/Favorites';
import ProfileScreen from '../screens/Profile';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default() => (
    <Tab.Navigator
        tabBar={
            props => <CustomTabBar {...props} />
        }
    >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Appointments' component={AppointementsScreen} />
        <Tab.Screen name='Favorites' component={FavoritesScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
);