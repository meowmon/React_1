// import React from 'react'
// import {connect} from 'react-redux'
 
// import {GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
// import {FlatList, View, StyleSheet, Image, Text, Keyboard, TouchableOpacity, Spinner} from 'react-native';
// import {Icon} from 'react-native-elements';
// import moment from 'moment';
 
// import Firebase from "../../services/firebase";
 
 
// const styles = StyleSheet.create({
//     footerContainer: {
//         marginVertical: 1,
//     },
//     footerText: {
//         fontSize: 14,
//         color: '#aaa',
//     },
//     messageContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         marginBottom: 5,
//         paddingHorizontal: 10
//     },
//     avatarContainer: {
//         width: 32,
//         height: 32
//     },
//     avatar: {
//         width: 24,
//         height: 24,
//         borderRadius: 12,
//     }
// });

// var user = {}
 
 
// class ChatScreen extends React.Component {
 
 
//     state = {
//         messages: [],
//         gifList: [],
//         customText: '',
//         isLoadingGif: false,
//     };
 
 
 
 
//     componentDidMount() {
//         // Update when new messages added
       
//     }

 
 
//     componentWillUnmount() {
        
//         //Firebase.off(this.uriMessages);
//     }
 
//     sendText = () => {
//         let text = this.state.customText.trim();
//         if (!text) return;
 
//         // const message = {
//         //     text,
//         //     user: "",
//         //     type: 'text',
//         //     image: '',
//         //     timestamp: Firebase.timestamp,
//         // };
//         //Firebase.push(this.uriMessages, message);
 
//         this.setState({customText: ''});
//         Keyboard.dismiss();
//     };

 
//     // renderGifPreview = (item) => {
//     //     let uri = item.images.fixed_height_small.url;
//     //     let height = 64;
//     //     let ratio = height / item.images.fixed_height_small.height;
//     //     let width = Math.round(item.images.fixed_height_small.width * ratio);
 
//     //     return <TouchableOpacity onPress={() => }>
//     //         <Image source={{uri}} style={{width, height, marginHorizontal: 5}}/>
//     //     </TouchableOpacity>
//     // };
 
//     renderChatFooter = (props) => {
//         let {isLoadingGif} = this.state;
 
//         return (
//             <View style={styles.footerContainer}>
//                 {isLoadingGif ? <Spinner style={{marginBottom: 40}} isShown/> :
//                     <View style={{marginBottom: 10}}>
//                         {/* <FlatList
//                             horizontal
//                             keyExtractor={item => item.bitly_url}
//                             data={this.state.gifList}
//                             renderItem={({item}) => this.renderGifPreview(item)}
//                         /> */}
//                     </View>
//                 }
//             </View>
//         );
//     };
 
//     inputChangeText = (text) => {
//         this.setState({customText: text});
//     };

 
//     renderMessage = ({currentMessage}) => {
//         let avatarSrc;
 
//         if (currentMessage.user.avatar) {
//             avatarSrc = {uri: currentMessage.user.avatar};
//         } else {
//             avatarSrc = require('../../../assets/icon_app.png');
//         }
 
//         let avatar = <Image style={styles.avatar} source={avatarSrc}/>;
 
//         return <View style={styles.messageContainer}>
//             <View style={styles.avatarContainer}>
//                 {avatar}
//             </View>
 
//             <View>
//                 <View style={{flex: 1, flexDirection: 'row'}}>
//                     <Text style={{fontWeight: 'bold', color: 'white'}}>
//                         {currentMessage.user.login || currentMessage.user.name}
//                     </Text>
 
//                     <Text style={{color: 'grey', fontSize: 12, fontStyle: 'italic', marginLeft: 5}}>
//                         {moment(currentMessage.timestamp).fromNow()}
//                     </Text>
//                 </View>
 
//                 <Text style={{color: 'white'}}>{currentMessage.text}</Text>
//             </View>
//         </View>
//     };
 
//     // renderInputToolbar = (props) => {
//     //     return <InputToolbar
//     //         {...props}
//     //         containerStyle={{
//     //             backgroundColor: 'transparent',
//     //             borderTopWidth: 1,
//     //             borderWidth: 1,
//     //             borderColor: 'white',
//     //             borderRadius: 30,
//     //             marginBottom: 1,
//     //             marginHorizontal: 5
//     //         }}
//     //         placeholderTextColor={'white'}
//     //         textInputStyle={{color: 'white'}}
//     //     />
//     // };
 
//     renderSend = (props) => {
//         return <Icon
//             onPress={this.sendText}
//             name='send'
//             type="font-awesome"
//             color='white'
//             containerStyle={{top: -10, right: 15}}
//         />
//     };
 
//     render() {
//         return (
//         <GiftedChat
//             text={this.state.customText}
//             onInputTextChanged={this.inputChangeText}
//             messages={this.state.messages}
//             onSend={this.sendText}
//             user={user}
//             textInputProps={{multiline: false}}
//             placeholder={'Type a message...'}
//             renderMessage={this.renderMessage}
//             //renderInputToolbar={this.renderInputToolbar}
//             renderSend={this.renderSend}
//         />
//  );
        
//     }

     
// }
 
 
// export default ChatScreen;