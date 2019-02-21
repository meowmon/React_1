import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Icon, Text} from 'react-native-elements';

import colors from '../../colors';
import CreateCircleModal from './CreateCircleModal';
import HeaderBar from '../../components/HeaderBar';


import firebase from '../../services/firebase';

export default class Dashboard extends React.Component {
    state = {isModalShown: false, messages: []};

    componentDidMount() {
        let conversations = firebase.database().ref('conversations/myid-clientid');


        let newChat = conversations.child('mykey');

        newChat.set({message: 'hello'});



        conversations.on('value', (snapshot) => {
            let messages = [];

            Object.keys(snapshot.val()).forEach(k => {
                messages.push(snapshot.val()[k])
            })


            this.setState({messages});
        })
    }

    showModal = () => {
        this.setState({isModalShown: true});
    };

    hideModal = () => {
        this.setState({isModalShown: false});
    };

    render() {
        let {isModalShown} = this.state;

        return <View>
            <HeaderBar>
                <Icon type="feather" name="menu"/>
                <Text style={{fontSize: 24}}>Amcoming</Text>
                <Icon type="feather" name="plus" onPress={this.showModal}/>
            </HeaderBar>

            <CreateCircleModal isModalShown={isModalShown} hideModal={this.hideModal} />

            <View>
                <Text>testes</Text>

                {this.state.messages.map(m => <Text>{m.message}</Text>)}
            </View>


        </View>
    }
}
