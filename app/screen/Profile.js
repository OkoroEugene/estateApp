import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Card, Button, Avatar } from 'react-native-elements';
import StaticHeader from '../components/header/header';
import StaticFooter from '../components/footer/footer';
import UserActionButton from '../components/ActionButton/ActionButton';
import { DrawerActions } from 'react-navigation';

class Profile extends Component {
    static navigationOptions = {
        title: 'Profile',
    }
    render() {
        return (
            <View>
                {/* <StaticHeader /> */}
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <Card>
                            <View style={styles.avatar}>
                                <Avatar
                                    width={120}
                                    height={120}
                                    rounded
                                    source={require('../Images/DSC_5667_8_9-copy.jpg')}
                                    activeOpacity={0.7}
                                />
                            </View>
                            <View
                                style={{
                                    borderBottomColor: '#f0f0f0',
                                    borderBottomWidth: 1,
                                    marginTop: 20
                                }}
                            />
                        </Card>

                        <Card
                            title='HELLO WORLD'
                            image={require('../Images/DSC_5667_8_9-copy.jpg')}>
                            <Text style={{ marginBottom: 10, fontSize: 15 }}>
                                The idea with React Native Elements is more about
                                component structure than actual design.
                        </Text>
                            <Button
                                icon={{ name: 'code' }}
                                backgroundColor='#03A9F4'
                                // fontFamily='Lato'
                                buttonStyle={{ borderRadius: 100, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='VIEW NOW' />
                        </Card>
                    </View>
                </ScrollView>
                <UserActionButton />
                {/* <StaticFooter /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center'
    },
    avatar: {
        alignItems: 'center'
    }
});

export default Profile;