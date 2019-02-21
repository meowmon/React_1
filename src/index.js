import React from 'react';

import {createSwitchNavigator} from 'react-navigation';
import MainDrawerNavigator from './screens/MainDrawerNavigator';
import LoginScreen from './screens/Login';
import ChatBotsScreen from './screens/Chat/ChatBotsScreen';
import {AsyncStorage, ActivityIndicator, View} from "react-native";
import $store from '../src/store';


class LoadingScreen extends React.Component {
    componentDidMount = async () => {
        const userData = await AsyncStorage.getItem('user');

        if (!userData) screen = 'LoginScreen';
        else {
            const user = JSON.parse(userData);
            $store.authSetUser(user);
            screen = 'MainDrawerNavigator';
        }

        this.props.navigation.navigate(screen);
    };

    render() {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large"/>
        </View>
    }
}


const MainNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    MainDrawerNavigator: MainDrawerNavigator,
    ChatScreen: ChatBotsScreen,
}, {
    initialRouteName: 'LoadingScreen'
});

export default MainNavigator;