import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

class StaticHeader extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <Header
                    maxHeight={57}
                    backgroundColor={'#E20201'}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Home', style: { color: '#fff', fontSize: 18, fontFamily: 'Quicksand-Bold' } }}
                // rightComponent={{ icon: 'home', color: '#fff', onPress: () => this.props.navigation.navigate('Home') }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default StaticHeader;