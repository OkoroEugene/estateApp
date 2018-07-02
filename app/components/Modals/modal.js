import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Platform, TextInput } from "react-native";
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Card, Button } from 'react-native-elements';

export default function (props) {
    let _elements = [];
    if (props) {
        _elements.push(
            <View style={styles.MainContainer}>
                <Modal
                    transparent={true}
                    animationType={"slide"}
                    visible={props.showModal}
                    onRequestClose={props.onClick}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.ModalInsideView}>
                            <View style={{ alignItems: 'flex-end', marginRight: 10, marginBottom: 15 }}>
                                <Icon name="close" size={25} onPress={props.onClick} />
                            </View>
                            {props.children}
                            {/* <Button title="Click Here To Hide Modal" onPress={props.onClick} /> */}
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
    return (
        <View>
            {_elements}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    footer: {
        marginBottom: 0,
        backgroundColor: 'red'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: (Platform.OS == 'ios') ? 20 : 0

    },
    ModalInsideView: {
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "white",
        height: 350,
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
});