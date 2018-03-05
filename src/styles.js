import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  listview: {
    flex:1
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  liContainer: {
    flex: 2
  },
  liPic: {
    height: 25,
    width: 25
  },
  liTitle: {
    color: '#333',
    fontSize: 20
  },
  liDescription: {
    color: '#333',
    fontSize: 12
  },
  liQty: {
    color: '#FF0000',
    fontSize: 10
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: '#24CE84',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  addItemRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "white",
    marginBottom: 10,
    padding: 10
  },
  textView:{
    flexDirection: 'row',
    paddingBottom: 10
  },
  addItemTitle: {
    fontSize: 30
  },
  itemInput: {
    height: 40,
    width: 300,
    borderWidth: 2,
    backgroundColor: 'white'
  },
  descriptionInput: {
    height: 40,
    width: 210,
    borderWidth: 2,
    backgroundColor: 'white'
  },
  picker: {
    height: 88,
    marginBottom:55
  },
  pickerItem: {
    height: 88
  }
});

module.exports = styles