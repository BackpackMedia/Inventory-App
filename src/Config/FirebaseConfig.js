import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCwE3hbbjog48VhhSYdCyxKF0lJA3vA3Xg",
    authDomain: "inventoryapp-f69f2.firebaseapp.com",
    databaseURL: "https://inventoryapp-f69f2.firebaseio.com",
    projectId: "inventoryapp-f69f2",
    storageBucket: "",
};

firebase.initializeApp(config);

var database = firebase.database();

module.exports =  database;