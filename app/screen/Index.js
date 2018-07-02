import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, TextInput } from "react-native";
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchLists, postList } from '../actions/list';
import _Button from '../components/button/button';
import ModalWithForm from '../components/Modals/modal';
import UserActionButton from '../components/ActionButton/ActionButton';
var MessageBarAlert = require('react-native-message-bar').MessageBar;
var MessageBarManager = require('react-native-message-bar').MessageBarManager;
import newList from './newList';

class Index extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home'
    });

    constructor(props) {
        super(props);
        this.state = {
            listName: '',
            description: '',
            price: '',
            isModalVisible: false
        };
    }

    openImage = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log(images);
        });
    }

    _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

    componentWillMount = () => {
        this.props.fetchLists();
    }

    // componentDidMount() {
    //     // Register the alert located on this master page
    //     // This MessageBar will be accessible from the current (same) component, and from its child component
    //     // The MessageBar is then declared only once, in your main component.
    //     MessageBarManager.registerMessageBar(this.refs.alert);
    // }

    componentWillReceiveProps = (next) => {
        if (next.newItem) {
            this.props.lists.unshift(next.newItem[0]);
            this.setState({ isModalVisible: false });
        }
        if (next.error)
            // console.log(next.error);
            MessageBarManager.showAlert({
                title: 'Error',
                message: next.error,
                alertType: 'error',
            });
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

    // ShowModalFunction(visible) {
    //     this.setState({ ModalVisibleStatus: visible });
    // }

    render() {
        let listItems = null;
        if (this.props.lists !== null) {
            listItems = this.props.lists.map((item, i) =>
                <Card fontFamily={'Quicksand-Bold'}
                    titleStyle={{ fontWeight: null }}
                    key={i}
                    title={item.name}
                    image={require('../Images/DSC_5667_8_9-copy.jpg')}>
                    <Text style={{ marginBottom: 10, fontSize: 15 }}>
                        {item.description}
                    </Text>
                    <Button
                        icon={{ name: 'code' }}
                        backgroundColor='#03A9F4'
                        fontSize={12}
                        buttonStyle={{ borderRadius: 100, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        onPress={() => this.props.navigation.navigate('Details')}
                        title='VIEW NOW' />
                </Card>
            );
        }
        return (
            <View style={{ flex: 1 }}>
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
                        color='green'
                        onPress={this.openImage}
                        iconName={''}
                        title={'Open Gallery'}
                    />
                    <_Button
                        style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10, alignItems: 'center' }}
                        color='#CF0201'
                        onPress={this.handleSubmit}
                        iconName={''}
                        title={'Create'}
                    />
                </ModalWithForm>

                <View style={styles.body}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.container}>
                            {listItems}
                        </View>
                    </ScrollView>
                </View>
                <UserActionButton onClick={this._toggleModal} />
            </View>
        );
        // <MessageBarAlert ref="alert" />
    }
}

Index.propTypes = {
    fetchLists: PropTypes.func.isRequired,
    lists: PropTypes.array.isRequired,
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
    lists: state.list.lists.reverse(),
    newItem: state.list.item,
    error: state.list.error
})
const mapDispatchToProps = dispatch => {
    return {
        fetchLists: () => dispatch(fetchLists()),
        postList: (data) => dispatch(postList(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);