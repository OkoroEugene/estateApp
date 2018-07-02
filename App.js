import React, { Component } from 'react';
import { AppRegistry, YellowBox, StyleSheet, View } from 'react-native';
import Tab from './app/config/router';
import { setCustomText } from 'react-native-global-props';
import { Provider } from 'react-redux';
import store from './app/store/index';

export default class reactApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tab navigation={this.props.navigation} />
      </Provider>
    );
  }
}

const customTextProps = {
  style: {
    fontFamily: 'Quicksand-Regular',
    // fontSize: 20
  }
}

console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
setCustomText(customTextProps);
AppRegistry.registerComponent('reactApp', () => reactApp);