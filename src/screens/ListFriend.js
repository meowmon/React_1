import React from 'react';
import {AsyncStorage, StyleSheet, View, FlatList} from 'react-native';
import {Text, SocialIcon,Icon, ListItem} from 'react-native-elements';
import firebase from 'react-native-firebase';
import axios from 'axios';
import {listen} from "../react-redux-auto";

import $store from '../store';
import colors from './../colors';


class ListFriend extends React.Component {
    
    onPressGotoChat() {
        this.props.navigation.navigate('ChatScreen');
    }
    
    keyExtractor = (item, index) => index
    
    renderItem = ({ item }) => (
        <View>
            <ListItem
                title={item.name}
                subtitle={item.subtitle}
                leftAvatar={{ source: { uri: item.avatar_url } }}
                rightIcon = {<Icon name ='arrow-forward' />}
                onPress={() => this.onPressGotoChat(item.id)}
            />
      <View style = {styles.line}/>
    </View>

    )

    render() {
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={listFriend}
                renderItem={this.renderItem}
            />
    )
    }
}

export default (ListFriend);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    line:{
        width: "100%",
        height: 1,
        backgroundColor: colors.gray
    }
    
});

const listFriend = [
    {
      id: 1,  
      name: 'Nguyễn văn A',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      isOnline: false
    },
    {
      id: 2,
      name: 'Nguyễn văn B',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      isOnline: false
    },
    {  
         id: 3,
        name: 'Nguyễn văn C',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        isOnline: false
    },
    {
        id: 4,
        name: 'Nguyễn văn D',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        isOnline: false
    },
    {
        id: 5,
        name: 'Nguyễn văn E',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        isOnline: false
      },
    {
        id: 6,
        name: 'Nguyễn văn F',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        isOnline: false
    },
    
  ]