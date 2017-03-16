import React, { Component } from 'react';
import {StyleSheet, Text, View, ListView, TouchableOpacity, Navigator, Alert, Image } from 'react-native';
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
    console.log(user)
    return(
      <TouchableOpacity style={styles.userRow} onPress = {(event) => console.log(user) } >


        <View style = {styles.casillaFoto} >

          <Image style = {styles.logo} source ={{ uri: 'https://facebook.github.io/react/img/logo_og.png'} }/>

          <Image style = {styles.logo} source ={{ uri: 'https://placehold.it/50x50/FF00EE'} }/>

        </View>

        <View style = {styles.casilla} >


          <Text style = {styles.userName}> {`Usuario: ${_.capitalize(user.username)}`} </Text>

          <Text style = {styles.personName}> {`Correo: ${_.capitalize(user.email)}`}  </Text>

          <Text style = {styles.personName}> {`Correo: ${_.capitalize(user.name)}`}  </Text>

          <Text style = {styles.website}> {`Pagina Web: ${_.capitalize(user.website)}`}  </Text>

          <Text style = {styles.personName}> {`Telefono: ${_.capitalize(user.phone)}`}  </Text>

          <Text style = {styles.personName}> {`Direccion (ciudad): ${_.capitalize(user.address.city)}`}  </Text>

          <Text style = {styles.personName}> {`Direccion (suite): ${_.capitalize(user.address.suite)}`}  </Text>

          <Text style = {styles.personName}>  </Text>

        </View>

        <Icon name="address-book-o"  style = {styles.personMoreIcon}/>

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
    flex: 1,
    borderWidth: 5,
    borderBottomColor: 'green',
    borderStyle: 'solid',
  },
  personName: {

  },
  userName: {
    fontWeight: 'bold',
  },
  website: {
    color: 'dodgerblue',
  },
  personMoreIcon: {
    color: "green",
    height: 40,
    width: 40,
    marginRight: 10
  },
  logo: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: 40,
    width: 40,

  },
  casilla: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: "column",
  },
  casillaFoto: {
    flex:0.15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: "column",
  }

});

module.exports = UserIndexScreen
