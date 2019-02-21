import React from 'react';
import {Provider} from "react-redux";
import {AppRegistry, YellowBox} from 'react-native';
import {createAppContainer} from 'react-navigation';
import 'proxy-polyfill';

import MainNavigator from './src';
import {reduxStore} from './src/store';


const AppContainer = createAppContainer(MainNavigator);

const App = () => <Provider store={reduxStore}>
    <AppContainer />
</Provider>;



// Ignore specific yellowbox warnings
YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger", "Setting a timer"]);

AppRegistry.registerComponent('amcoming', () => App);
