import React, {Component} from 'react';
import {View, Text, TextInput, Picker} from 'react-native';
//import ModalPicker from 'react-native-modal-picker';
import Button from '../components/Button';
const styles = require('../styles.js');
const firebaseApp = require('../Config/FirebaseConfig');

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            qtn: '1'
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
            qtn: '0'
        })
        this.props.navigation.goBack();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.textView}>
                    <Text style={styles.addItemTitle}>Item: </Text>
                    <TextInput
                        style={styles.itemInput}
                        placeholder = "Item Name"
                        onChangeText={(text) => this.setState({title: text})}
                    />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.addItemTitle}>Description: </Text>
                    <TextInput
                        style={styles.descriptionInput}
                        placeholder = "Item Description"
                        onChangeText={(text) => this.setState({description: text})}
                    />
                </View>
                <Text style={styles.addItemTitle}>Quantity: </Text>
                <Picker
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                    selectedValue={this.state.qtn}
                    onValueChange={(itemValue, itemIndex) => this.setState({qtn: itemValue})}
                    enum='dropdown'>
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                </Picker>
                <Button title="Save" onPress={this.addItem.bind(this)} />
            </View>
        )
    }
}

export default AddItem;