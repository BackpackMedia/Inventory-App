import React, {Component} from 'react';
import {View, ListView, Alert, AlertIOS} from 'react-native';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
const styles = require('../styles.js');
const firebaseApp = require('../Config/FirebaseConfig');

class ItemList extends Component {
    /*Setup and state*/
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
        this.itemsRef = firebaseApp.ref('inventory');
    }

    componentDidMount(){
        this.listenForItem(this.itemsRef);
    }

    componentDidUnMount(){
        this.state.itemsRef.off('value');
    }

    /*Custom methods*/
    renderItem(item) {
        const onPress = () => {
            Alert.alert(
                'Delete Item',
                'delete ' + item.title + ' ?',
                [
                    {text: 'Cancel', onPress: () => console.log('cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => this.itemsRef.child(item._key).remove()},
                ],
                {cancelable: false}
            )
        };
        const onLongPress = () => {
           AlertIOS.prompt(
               'Edit Description',
               'current description is ' + item.description,
               [
                   {text: 'Cancel', onPress: () => console.log('cancel Pressed'), style: 'cancel'},
                   {text: 'OK', onPress: (text) => this.itemsRef.child(item._key).update({description: text})},
                ],
           )
        };

        return(
            <ListItem item={item} onPress={onPress} onLongPress={onLongPress}/>
        );
    }

    /*Actual View*/
    render() {
        const { state, navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderItem.bind(this)}
                enableEmptySections={true}
                style={styles.listview}/>
            </View>
        )
    }

    /*Firebase things*/
    listenForItem(itemsRef){
        itemsRef.on('value', (snap) => {
            //get array of children
            var items = [];
            snap.forEach((child) => {
                items.push({
                    title: child.val().title,
                    description: child.val().description,
                    qtn: child.val().qtn,
                    _key: child.key
                });
            });
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            });
        });
    }
}

export default ItemList;