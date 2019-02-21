import React from 'react';
import {createStackNavigator} from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';


let genRoute = (screen, header = null) => {
    let navigationOptions = {header};

    if (header) {
        navigationOptions = ({navigation}) => ({
            header: React.createElement(header, {navigation}),
        })
    }
    return {screen, navigationOptions};
};


const MainStackNavigator = createStackNavigator({
    MainTabNavigator: genRoute(MainTabNavigator)
}, {
    initialRouteName: 'MainTabNavigator',
    navigationOptions: ({navigation}) => {
        let drawerLockMode = 'unlocked';
        return {drawerLockMode};
    }
});

export default MainStackNavigator;
