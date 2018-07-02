import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

// const Button = ({ onPress, children }) => {
//     return (
//         <Button
//             backgroundColor={this.props.color}
//             borderRadius={100}
//             large
//             onPress={this.props.onPress}
//             icon={{ name: this.props.iconName, type: 'font-awesome' }}
//             title={this.props.title} />
//     );
// };

class _Button extends Component {
    render() {
        return (
            <View style={this.props.style}>
                <Button
                    loading
                    loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={styles.button}
                    containerStyle={{ marginTop: 20 }}
                    backgroundColor={this.props.color}
                    // borderRadius={100}
                    onPress={this.props.onPress}
                    title={this.props.title} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
    }
});

export default _Button;