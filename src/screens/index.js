import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {Image, Icon} from 'react-native-elements';
import {TAB_ICON_SIZE} from "../settings";

import HeaderBar from '../components/HeaderBar';

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

const BottomTab = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);
export default BottomTab;