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
      users: [],
      email: '',
      usersDatasource: [],
    }

  }

  componentWillMount(){
    // console.log("component will mount is always there")
    this._getUsersAPI()

  }

  render() {

    var usuarios = _.map(
      this.state.users, (user) => {
        return (

          <TouchableOpacity key={user.id} style={styles.personRow}onPress = {() => console.log("CLicked: " + user.email)}
          >
            <Text>{user.email}</Text>
          </TouchableOpacity>


        )
      }
    )

    return (

      <ViewContainer>
        <StatusBarBackground style = {{backgroundColor: "skyblue" }} />

        {usuarios}

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
    .then(

      (response) => {
        this.setState({
          id: response[0].id,
          users: response,
          email: response[0].email,
          // usersDatasource: ds.cloneWithRows(response)
        })

        console.log("response")
        console.log(this.state.id)
        console.log(this.state.users)
        console.log(this.state.email)
        console.log(this.state.usersDatasource)

    }


      )
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
