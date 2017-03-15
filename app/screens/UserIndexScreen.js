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
      dataSource: ds.cloneWithRows([])
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

        <ListView style = {{marginTop: 0}}
          enableEmptySections = {true}
          dataSource = {this.state.dataSource}
          renderRow = {(user) => { return this._renderUserRow(user)}}>
        </ListView>

      </ViewContainer>
    );
  }

  // Get a user
  _getUsersAPI(){
    var usuarios = []
    let url = ApiUtils.url + 'users';
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
        (responseJson) => {
          console.log(responseJson)
          var users = responseJson
          for(var i = 0; i < users.length;i++){
            usuarios.push(users[i])
          }
          console.log(usuarios)
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(usuarios)
          })
        }

      )
    .catch((error) => {
      console.log(error)
      Alert.alert(
          "Error1",
          'There was an error trying to connect with the server. Please try later.'
      );

    }).done();
  }

  _renderUserRow(user){
    var i = i+1;
    return(
      <TouchableOpacity style={styles.userRow} onPress = {(event) => console.log(user) } >
        <Text style = {styles.personName}> {` ${_.capitalize(user.email)} ${_.capitalize(user.name)}`} </Text>

        <View style = {{flex: 1}} />

        <Icon name="chevron-right"  style = {styles.personMoreIcon}/>

      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  userRow: {
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
