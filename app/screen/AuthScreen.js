import React from 'react';
import { View, Text, AppRegistry, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import Login from '../screen/login';
import Register from '../screen/register';

class LoginScreen extends React.Component {
    // static navigationOptions = {
    //     header: null
    // }
    render() {
        // const { params } = this.props.navigation.state;
        return (
            <Login />
        );
    }
}

class RegisterScreen extends React.Component {
    render() {
        return (
            <Register />
        );
    }
}

class ModalScreen extends React.Component {
    // static navigationOptions = {
    //     header: null
    // }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss" />
            </View>
        );
    }
}

export { RegisterScreen, LoginScreen, ModalScreen };
AppRegistry.registerComponent('Login', () => Login);