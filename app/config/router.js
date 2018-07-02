import React, { Component } from 'react';
import { Text } from 'react-native';
import { createStackNavigator, DrawerActions, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Index from '../screen/Index';
import Profile from '../screen/Profile';
import Splash from '../screen/splash';
import Details from '../screen/Details';
import ModalWithForm from '../components/Modals/modal';
import { DrawerContent } from './DrawerHeader';

// const AppTab = createMaterialTopTabNavigator({
//     Index: {
//         screen: Index
//     },
//     'New List': {
//         screen: ModalWithForm,
//     },
// }, {
//         tabBarOptions: { 
//             activeBackgroundColor: '#E20201',
//             inactiveBackgroundColor: '#E20201'
//          }
//     });

const firstStack = createStackNavigator({
    Index: {
        screen: Index,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Page',
            headerLeft: <Icon name="menu" style={{ color: 'white', marginLeft: 10 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} size={25} />,
            headerStyle: {
                backgroundColor: '#E20201', alignItems: 'center', textAlign: 'center', borderWidth: 1, borderBottomColor: 'red'
            },
            headerTitleStyle: {
                color: 'white', fontWeight: null, fontFamily: 'Quicksand-Bold', alignItems: 'center'
            },
        }),
    }
});

const secondStack = createStackNavigator({
    Profile: {
        screen: Profile
    }
}, {
        navigationOptions: ({ navigation }) => ({
            title: 'Profile',
            headerStyle: {
                backgroundColor: '#E20201', alignItems: 'center', textAlign: 'center', borderWidth: 1, borderBottomColor: 'red'
            }, drawerLabel: 'Home',
            headerTitleStyle: {
                color: 'white', fontWeight: null, fontFamily: 'Quicksand-Bold', alignItems: 'center'
            },
            headerLeft: <Icon name="menu" style={{ color: 'white', marginLeft: 10 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} size={25} />,
            // headerLeft: <Icon name="chevron-left" style={{ color: 'white', marginLeft: 10 }} onPress={() => navigation.goBack(null)} size={25} />,
            // ...DrawerHeader
        }),
    });


const AppNav = createDrawerNavigator({
    Home: {
        screen: firstStack,
        navigationOptions: {
            drawerIcon: () => (
                <Icon name="home" style={{ color: 'black' }} size={20} />
            ),
        }
    },
    Profile: {
        screen: secondStack,
        navigationOptions: {
            drawerIcon: () => (
                <Icon name="user" style={{ color: 'black' }} size={20} />
            ),
        }
    },
}, {
        contentComponent: DrawerContent,
        contentOptions: { labelStyle: { fontWeight: null, fontFamily: 'Quicksand-Bold' } }
    });

const Tab = createStackNavigator({
    Splash: {
        screen: Splash,
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Drawer: {
        screen: AppNav,
        navigationOptions: {
            header: null
        }
    },
    Details: {
        screen: Details
    },
},
    {
        initialRouteName: 'Splash',
        navigationOptions: {
            headerTitleStyle: {
                fontWeight: null, fontFamily: 'Quicksand-Bold', alignItems: 'center'
            },
        }
        // headerMode: 'none',
    });



export default Tab;