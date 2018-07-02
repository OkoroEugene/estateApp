import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { RegisterScreen, LoginScreen, ModalScreen } from '../screen/AuthScreen';
import Index from '../screen/Index';
import Profile from '../screen/Profile';
import Splash from '../screen/splash';
import Details from '../screen/Details';


const TabNavigation = TabNavigator({
    Login: {
        screen: LoginScreen,
    },
    Register: {
        screen: RegisterScreen,
    },
});

export default TabNavigation;