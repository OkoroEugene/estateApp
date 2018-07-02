import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

class Background extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        let backgroundImg = '../../../app/Images/Anguish-2048.jpg';
        return (
            <ImageBackground source={require(backgroundImg)} style={styles.backgroundImage} >

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
});

export default Background;