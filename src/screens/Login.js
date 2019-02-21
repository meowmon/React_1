import React from 'react';
import {AsyncStorage, StyleSheet, View} from 'react-native';
import {Text, SocialIcon} from 'react-native-elements';
import firebase from 'react-native-firebase';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import axios from 'axios';
import {listen} from "../react-redux-auto";

import $store from '../store';
import colors from './../colors';


class Login extends React.Component {
    loginFacebook = async () => {
        const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

        if (result.isCancelled) return alert('User cancelled request');

        const data = await AccessToken.getCurrentAccessToken();

        if (!data) return alert('Something went wrong obtaining the users access token');

        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

        const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

        let resp = await axios.get(`https://graph.facebook.com/v3.2/${data.userID}?access_token=${data.accessToken}&fields=email,first_name&format=json`);

        // Set value in store
        $store.authSetUser(resp.data);
        console.log("Login loginFacebook data response = " + JSON.stringify(resp.data))
        this.props.navigation.navigate('MainDrawerNavigator');
    };

    render() {
        return <View style={styles.container}>
            <Text style={styles.brand}>Am Coming</Text>

            <SocialIcon
                button
                title='Sign In With Facebook'
                type='facebook'
                onPress={this.loginFacebook}
            />

            <SocialIcon
                button
                title='Sign In With Google'
                type='google-plus-official'
            />
        </View>
    }
}


export default listen('auth')(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },

    brand: {
        color: colors.primary,
        fontSize: 48,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginVertical: 80
    }
});