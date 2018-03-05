import React, {Component} from 'react';
import { View, TouchableHighlight, Text, Image, Button } from 'react-native';
const styles = require('../styles.js');

class ListItem extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
                <View style={styles.li}>
                    <Text style={styles.liTitle}>{this.props.item.title}</Text>
                    <Text style={styles.liDescription}>{this.props.item.description}</Text>
                    <Text style={styles.liQty}>Qtn: {this.props.item.qtn}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default ListItem;