import React, {Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
const styles = require('../styles.js');

class Button extends Component {
    render() {
        return (
            <View style={styles.action}>
                <TouchableHighlight onPress={this.props.onPress}>
                <Text style={styles.actionText}>{this.props.title}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Button;