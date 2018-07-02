import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createStackNavigator, DrawerActions, createDrawerNavigator, DrawerItems } from 'react-navigation';

class StaticFooter extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Icon style={styles.Icon} name="home" size={25} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Icon style={styles.Icon} name="user" size={25} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Icon style={styles.Icon} name="search" size={25} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Index')} style={styles.button}>
                    <Icon style={styles.Icon} name="list" size={25} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#dedede',
        // flex: 1,
        flexDirection: 'row',
        // borderTopWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    button: {
        height: 40,
        width: '24%',
        alignItems: 'center',
        marginTop: 15,
    },
    Icon: {
        color: 'red'
    },
});

export default StaticFooter;