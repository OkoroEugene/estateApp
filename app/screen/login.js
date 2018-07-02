import React from 'react';
import { ImageBackground, View, Text, AppRegistry, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Input } from 'react-native-elements';
import Logo from '../components/img/logo';
import _Button from '../components/button/button';
import { connect } from 'react-redux';
import * as loginActions from '../actions/actionTypes';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    _loginUser = () => {
        const { email, password } = this.state;
        this.props.actions.loginRequest(email, password);
    }
    static navigationOptions = {
        title: 'Login'
    }
    render() {
        // const _params = this.props.params;
        let backgroundImg = '../../app/Images/Anguish-2048.jpg';
        return (
            <ImageBackground source={require(backgroundImg)} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <Logo />
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.formInput}
                            placeholderTextColor={'#7f7c7a'}
                            underlineColorAndroid='transparent'
                            placeholder={'enter a valid email address'}
                            onChangeText={(email) => this.setState({ email })}
                        // value={this.state.text}
                        />
                        <TextInput
                            style={styles.formInput}
                            placeholderTextColor={'#7f7c7a'}
                            underlineColorAndroid='transparent'
                            placeholder={'enter a valid password'}
                            marginTop={20}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>

                    <_Button
                        style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10 }}
                        color='#CF0201'
                        onPress={() => { this._loginUser }}
                        iconName={''}
                        title={'Login'}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        width: null,
        height: null,

    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    formContainer: {
        padding: 20,
    },
    formInput: {
        borderRadius: 100,
        height: 50,
        borderColor: '#343232',
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white',
        backgroundColor: '#343232'
    }
});

mapStateToProps = (state) => {
    const { user } = state;
    return {
        user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _loginUser: data => dispatch(_loginUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);