import React from 'react';
import {Modal, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import HeaderBar from '../../components/HeaderBar';


export default class CreateCircleModal extends React.Component {
    render() {
        let {isModalShown, hideModal} = this.props;

        if (!isModalShown) return <View/>;

        return <Modal
            animationType="slide"
            transparent={false}
            visible
        >
            <HeaderBar
                rightComponent={<Icon type="feather" name="chevron-down" onPress={hideModal} />}
            />

            <Text>aấdsadsdsadsa</Text>
        </Modal>
    }
}
