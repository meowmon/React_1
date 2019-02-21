import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Header, Button} from 'react-native-elements';

import {listen} from "../react-redux-auto";
import $store from '../store';


class SideBar extends React.Component {
    logout = () => {
        $store.authClearUser();
        this.props.navigation.navigate('LoginScreen');
    };

    render() {
        let user = $store.auth?.user;

        return <View>
            <Header style={{height: 56}}>
                <View></View>
                <Button title={'Logout'} onPress={this.logout} />
                <View></View>
            </Header>
        </View>
    }
}

export default listen('auth')(SideBar);