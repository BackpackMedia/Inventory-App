import React from 'react';
import { Button } from 'react-native'
import { StackNavigator } from 'react-navigation';
import ItemList from './src/screens/ItemList';
import AddItem from './src/screens/AddItem';

const Navigation = StackNavigator(
  {
    Home: { screen: ItemList,
      navigationOptions: ({navigation}) => ({
        title: "Inventory App",
        headerRight: (
          <Button onPress={() => navigation.navigate('Add')} title="Add"/>
        )
      }),
    },
    Add: { screen: AddItem,
      navigationOptions: ({navigation}) => ({
        title: 'Item Info'
      }),
    },
  },
  {
    initialRouteName: 'Home'
  }
)

export default Navigation;