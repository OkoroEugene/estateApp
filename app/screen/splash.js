import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, View, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class Splash extends Component {
    static navigationOptions = {
        header: null
    }
    componentWillMount() {
        setTimeout(() => {
            this._navigateTo('Home');
        }, 5000);
    }

    _navigateTo = (routeName) => {
        const actionToDispatch = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })]
        })
        this.props.navigation.dispatch(actionToDispatch)
    }

    render() {
        let backgroundImg = '../../app/Images/Anguish-2048.jpg';
        let logo = '../../app/Images/31275778_1623885464359155_6983921709731970550_n.png';
        return (
            <ImageBackground source={require(backgroundImg)} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={require(logo)} style={styles.logo} />
                    </View>
                    <View style={styles.spinner}>
                        <ActivityIndicator size="small" color="#CCC" />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
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
    spinner: {
        marginTop: 20
    }
});

export default Splash;