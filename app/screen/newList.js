import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, TextInput } from "react-native";
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { postList } from '../actions/list';
import _Button from '../components/button/button';
import ModalWithForm from '../components/Modals/modal';
import UserActionButton from '../components/ActionButton/ActionButton';

class NewList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: '',
            description: '',
            price: '',
            isModalVisible: false
        };
    }

    _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

    componentWillReceiveProps = (next) => {
        if (next.newItem) {
            console.log(next.newItem);
            this.props.lists.unshift(next.newItem);
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: this.state.listName,
            description: this.state.description,
            price: this.state.price
        }
        this.props.postList(data);
    }

    render() {
        return (
            <View>
                <ModalWithForm
                    onClick={this._toggleModal}
                    showModal={this.state.isModalVisible}>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.formInput}
                            placeholderTextColor={'#7f7c7a'}
                            underlineColorAndroid='transparent'
                            placeholder={'enter list name'}
                            onChangeText={(listName) => this.setState({ listName })}
                        // value={this.state.text}
                        />
                        <TextInput
                            style={styles.formInput}
                            placeholderTextColor={'#7f7c7a'}
                            underlineColorAndroid='transparent'
                            placeholder={'enter description'}
                            marginTop={20}
                            onChangeText={(description) => this.setState({ description })}
                        />
                        <TextInput
                            style={styles.formInput}
                            placeholderTextColor={'#7f7c7a'}
                            underlineColorAndroid='transparent'
                            placeholder={'enter price'}
                            marginTop={20}
                            onChangeText={(price) => this.setState({ price })}
                        />
                    </View>
                    <_Button
                        style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10, alignItems: 'center' }}
                        color='#CF0201'
                        onPress={this.handleSubmit}
                        iconName={''}
                        title={'Create'}
                    />
                </ModalWithForm>
                {/* <UserActionButton onClick={this._toggleModal} /> */}
            </View>
        );
    }
}

NewList.propTypes = {
    newItem: PropTypes.object
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
        height: 500,
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    TextStyle: {
        fontSize: 20,
        marginBottom: 20,
        color: "#fff",
        padding: 20,
        textAlign: 'center'
    },
    formContainer: {
        padding: 20,
    },
    formInput: {
        borderRadius: 8,
        height: 50,
        fontWeight: null,
        borderColor: '#343232',
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white',
        backgroundColor: '#343232'
    }
});

const mapStateToProps = state => ({
    newItem: state.list.item,
    error: state.list.error
})
const mapDispatchToProps = dispatch => {
    return {
        postList: (data) => dispatch(postList(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewList);