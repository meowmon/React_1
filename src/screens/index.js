import React from 'react';
import {createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import SideBar from '../components/SideBar';
import MapScreen from './Map';
import DashboardScreen from './Dashboard';


let genRoute = (module, icon, header) => ({
    screen: module,
    navigationOptions: ({navigation}) => ({
        tabBarVisible: icon !== 'clash',
        tabBarIcon: (params) => {
            let {tintColor} = params;

            return <Icon color={tintColor} type='font-awesome' name={icon} />
        },
    })
});

const RouteConfigs = {
    DashboardScreen: genRoute(DashboardScreen, 'home'),
    MapScreen: genRoute(MapScreen, 'map'),
};

const BottomTabNavigatorConfig = {
    initialRouteName: 'DashboardScreen',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
    }
};

const BottomTabNavigator = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);


const DrawerNavigator = createDrawerNavigator({
    App: {screen: BottomTabNavigator},
}, {
    contentComponent: navigation => <SideBar navigation={navigation.navigation}/>
});


BottomTabNavigator.navigationOptions = ({ navigation }) => {
    let drawerLockMode = 'unlocked';
    return {drawerLockMode};
};

export default DrawerNavigator;
