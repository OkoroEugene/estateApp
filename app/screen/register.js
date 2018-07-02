import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import { Icon } from 'react-native-elements';

class Register extends React.Component {
    static navigationOptions = {
        title: 'Register'
    }
    render() {
        return (
            <View>
                <Text>REGISTER</Text>
            </View>
        );
    }
}

export default Register;
AppRegistry.registerComponent('Register', () => Register);