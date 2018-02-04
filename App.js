import React from 'react';
import { StackNavigator } from 'react-navigation';
import ItemList from './components/screens/ItemList';
import AddItem from './components/screens/AddItem';

const Navigation = StackNavigator({
    Home: { screen: ItemList,
      navigationOptions: ({navigation}) => ({
        title: "Inventory App"
      }),
    },
    Add: { screen: AddItem,
      navigationOptions: ({navigation}) => ({
        title: 'Add Item'
      }),
    }
})

export default Navigation;