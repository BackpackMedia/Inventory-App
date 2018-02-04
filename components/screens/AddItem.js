import React, {Component} from 'react';
import {View, Text, TextInput, Picker} from 'react-native';
//import ModalPicker from 'react-native-modal-picker';
import Button from '../Button';
const styles = require('../../styles.js');
const firebaseApp = require('../Config/FirebaseConfig');

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            qtn: 1
        };
        this.itemsRef = firebaseApp.ref('inventory');
    }

    addItem() {
        this.itemsRef.push({
            title: this.state.title,
            description: this.state.description,
            qtn: this.state.qtn
        });
        this.setState({
            title: '',
            description: '',
            qtn: 1
        })
        this.props.navigation.goBack();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                    <Text style={styles.addItemTitle}>Item: </Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder = "Item Name"
                        onChangeText={(text) => this.setState({title: text})}
                    />
                    <Text style={styles.addItemTitle}>Description: </Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder = "Item Name"
                        onChangeText={(text) => this.setState({description: text})}
                    />
                    {/*<Text style={styles.addItemTitle}>qtn: </Text>
                    <ModalPicker
                        data={data}
                        initValue="Select a Quantity"
                    onValueChange={(option) => this.setState({qtn: option.label})}/>*/}
                    <Button title="Save" onPress={this.addItem.bind(this)} />
            </View>
        )
    }
}

export default AddItem;