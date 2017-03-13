import React, { Component } from 'react';
import {StyleSheet, Text, View, ListView, TouchableOpacity, Navigator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'

import message from '../../temp'
import people from '../../temp'
// import API from '../utils/api.js';
import ApiUtils from '../utils/Helpers.js';


 class UserIndexScreen extends Component {

  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2})

    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }

  }

  componentWillMount(){
    // console.log("component will mount is always there")
    this._getUsersAPI()

  }

  render() {
    return (

      <ViewContainer>
        <StatusBarBackground style = {{backgroundColor: "skyblue" }} />

        <Text> Marcar que esta la cosa funcionando</Text>


      </ViewContainer>


    );
  }

  // Get a user
  _getUsersAPI(){

    console.log("entro al fetch")
    let url = ApiUtils.url + 'users';
    console.log(url)
    fetch(url,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
    .then(ApiUtils.checkStatus)
    .then(response => response.json())
    .then(console.log("usuarios:"))
    .then(response => console.log(response))
    .catch((error) => {
      Alert.alert(
          "Error1",
          'There was an error trying to connect with the server. Please try later.'
      );

    }).done();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 30,
  },
  personName: {
    marginLeft: 20,
  },
  personMoreIcon: {
    color: "green",
    height: 20,
    width: 20,
    marginRight: 20
  }

});

module.exports = UserIndexScreen
