import React from 'react';
import { View, Text, AppRegistry, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem, Card } from 'react-native-elements';
import UserActionButton from '../components/ActionButton/ActionButton';

class Details extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: this.props.email,
    //         password: this.props.password
    //     }
    // }
    static navigationOptions = {
        title: 'Details'
     }
    render() {
        const users = [
            {
                name: 'brynn',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
        ]
        // const _params = this.props.params;
        let img = '../Images/DSC_5667_8_9-copy.jpg';
        return (
            <View style={styles.container}>
                <View style={styles.imgBackground}>
                    <Image
                        style={styles.img}
                        source={require(img)}
                    />

                    <Card title="SERVICE NAME">
                        <View style={styles.user}>
                            {/* <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: u.avatar }}
                            /> */}
                            <View style={styles.details}>
                                <Text style={styles.data1}>Apartment Name: </Text>
                                <Text style={styles.data2}>Zoo Estate</Text>
                            </View>
                            <View style={styles.details}>
                                <Text style={styles.data1}>Plot Number: </Text>
                                <Text style={styles.data2}>1014739</Text>
                            </View>
                        </View>
                    </Card>
                </View>
                <UserActionButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBackground: {
        // flex: 1
        // backgroundColor: 'red'
    },
    img: {
        resizeMode: 'cover',
        height: '60%',
        width: '100%'
    },
    details: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center'
    },
    data1: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 18
    },
    data2: {
        marginLeft: 10,
        fontSize: 18
    }
});

export default Details;