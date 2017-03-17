import React, { Component } from 'react';
import {StyleSheet, Text, Navigator, Alert, Dimensions, TextInput } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

const {height, width} = Dimensions.get('window');

class LoginScreen extends Component {


  constructor(props){
    super(props)
    this.state = {
      textLogin: 'Usuario',
      textPassword: 'Contraseña'
    }
   }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style = {{backgroundColor: "skyblue" }} />

        <Text> el login va aqui: </Text>

        <TextInput
          ref = "login"
          style={styles.input}
          onChangeText={ (text) => this.setState({text})}
          value={this.state.textLogin}
        />

        <TextInput
          ref = "password"
          style={styles.input}
          onChangeText={ (text) => this.setState({text})}
          value={this.state.textPassword}
        />

      </ViewContainer>


    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mapita: {
    height: 250,
    justifyContent: 'center',
    margin: 40,
 },
  map: {
    width: width,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: width,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
  },


});

module.exports = LoginScreen