import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// you can set your style right here, it'll be propagated to application
// const uiTheme = {
//     palette: {
//         primaryColor: COLOR.green500,
//     },
//     toolbar: {
//         container: {
//             height: 60,
//         },
//     },
// };

class HomeScreen extends Component {
    // static navigationOptions = {
    //     header: null
    // }
    render() {
        let backgroundImg = '../../app/Images/Anguish-2048.jpg';
        let logo = '../../app/Images/31275778_1623885464359155_6983921709731970550_n.png';
        return (
            <ImageBackground source={require(backgroundImg)} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={require(logo)} style={styles.logo} />
                    </View>
                    <View style={styles.textPanel}>
                        <Text style={{ color: 'white', fontSize: 31 }} h1>real estate app</Text>
                        <Text style={{ color: 'white', fontSize: 18, opacity: 0.5 }}>...home for all</Text>
                    </View>

                    <View style={styles.body}>
                        <View style={styles.buttonContainer1}>
                            <View style={styles.card}>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => this.props.navigation.navigate('Index')}
                                >
                                    <Icon style={styles.Icon} name="home" size={55} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.card}>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => this.props.navigation.navigate('Profile')}
                                >
                                    <Icon style={styles.Icon} name="user" size={55} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.buttonContainer2}>
                            <View style={styles.card}>
                                <TouchableOpacity style={styles.button}>
                                    <Icon style={styles.Icon} name="search" size={55} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.card}>
                                <TouchableOpacity style={styles.button}>
                                    <Icon style={styles.Icon} name="suitcase" size={55} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }

    _handlePress(event) {
        this.disabled = true;
        console.log('Pressed!');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        marginTop: 50
    },
    textPanel: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },

    buttonContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20
    },
    card: {
        backgroundColor: 'white',
        opacity: 0.2,
        width: '49%',
        height: 100,
    },
    formInput: {
        fontSize: 5,
        opacity: 1
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems: 'center',
    },
    button: {

    },
    Icon: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
        opacity: 1
    }
});

export default HomeScreen;
// AppRegistry.registerComponent('reactApp', () => HomeScreen);