import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { Avatar } from 'react-native-elements';
import { DrawerItems } from 'react-navigation';

export class CustomHeader extends React.Component {
    render() {
        const DrawerHeaderWithBackButton = ({ navigation }) => ({
            title: this.props.title,
            headerStyle: {
                backgroundColor: '#E20201', alignItems: 'center', textAlign: 'center', borderWidth: 1, borderBottomColor: 'red'
            },
            headerTitleStyle: {
                color: 'white', fontWeight: null, fontFamily: 'Quicksand-Bold', alignItems: 'center'
            },
            headerLeft: <Icon name={this.props.Icon} style={{ color: 'white', marginLeft: 10 }} onPress={this.props.onClick} size={25} />,
        });
        return (
            <View>
                {DrawerHeaderWithBackButton}
            </View>
        );
    }
}

export class DrawerContent extends React.Component {
    render() {
        let backgroundImg = '../Images/bg1.png';
        return (
            <View style={styles.container}>
                <ImageBackground source={require(backgroundImg)} style={styles.avatarBg}>
                    <View style={styles.avatarContainer}>
                        <Avatar
                            width={100}
                            height={100}
                            rounded
                            source={require('../Images/avatar04.png')}
                            activeOpacity={0.7}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.userName}>
                            <Text style={styles.text}>Okoro Obinna</Text>
                            <View style={styles.caret}>
                                <Icon color={'white'} name='menu-down' size={20} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.drawer}>
                    <DrawerItems {...this.props} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarBg: {
        // backgroundColor: '#03A9F4',
        // borderBottomColor: '#03A9F4',
        height: 200
    },
    avatarContainer: {
        marginTop: 30,
        marginRight: 2,
        alignItems: 'center',
        alignContent: 'center',
    },
    drawer: {
        marginTop: 0,
    },
    userName: {
        marginTop: 20,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    text: {
        color: 'white'
    },
    caret: {
        marginBottom: 8,
        marginLeft: 10
    }
})