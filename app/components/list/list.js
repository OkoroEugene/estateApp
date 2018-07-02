import React from 'react';
import { View, Text, AppRegistry, StyleSheet, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class ListItems extends React.Component {
    render() {
        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ]
        return (
            <View style={styles.container}>
                <List containerStyle={{ marginBottom: 20 }}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                roundAvatar
                                avatar={{ uri: l.avatar_url }}
                                key={i}
                                title={l.name}
                                rightIcon={{ name: null }}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        resizeMode: 'cover',
        height: '60%',
        width: '100%'
    }
});

export default ListItems;