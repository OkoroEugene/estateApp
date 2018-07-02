import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Header, Card, Button, Avatar } from 'react-native-elements';
import { RegisterScreen, LoginScreen, ModalScreen } from '../screen/AuthScreen';
import Index from '../screen/Index';
import Profile from '../screen/Profile';

const AppNav = DrawerNavigator({
    Home: {
        screen: Index,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Page',
            headerStyle: {
                backgroundColor: '#E20201', alignItems: 'center', textAlign: 'center', borderWidth: 1, borderBottomColor: 'red'
            }, drawerLabel: 'Home',
            headerTitleStyle: {
                color: 'white', fontWeight: null, fontFamily: 'Quicksand-Bold', alignItems: 'center'
            },
            headerLeft: <Icon name="menu" style={{ color: 'white', marginLeft: 10 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} size={25} />,
        }),
    },
    Profile: {
        screen: Profile,
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
});

class Main extends Component {
    render() {
        return (
            <AppNav />
        );
    }
}

export default Main;
AppRegistry.registerComponent('Main', () => Main);