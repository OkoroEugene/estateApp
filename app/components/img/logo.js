import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class Logo extends Component {
    render() {
        let logo = '../../../app/Images/31275778_1623885464359155_6983921709731970550_n.png';
        return (
            <View style={styles.container}>
                <Image source={require(logo)} style={styles.logo} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
});

export default Logo;
// AppRegistry.registerComponent('Logo', () => Logo);