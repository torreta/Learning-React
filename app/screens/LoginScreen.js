import React, { Component } from 'react';
import {StyleSheet, Text, Navigator, Alert, Dimensions, TextInput, Button } from 'react-native';
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


  _onPressButton(){

    // if ((this.state.textLogin != undefined) && (this.state.textPassword != undefined)) {
    //   console.log("Botton Apretado")
    //   console.log(this.state.textLogin)
    //   console.log(this.state.textPassword)
    // }else{
    //   console.log("Botton Apretado, pero sin valores")
    // }
    Alert.alert("funciona el boton, yay!")

  }


  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style = {{backgroundColor: "skyblue" }} />

        <Text> el login va aqui: </Text>

        <TextInput
          ref = "login"
          placeholder="Usuario"
          style={styles.input}
          onChangeText={ (textLogin) => this.setState({textLogin})}

        />

        <TextInput
          ref = "password"
          placeholder="Contraseña"
          style={styles.input}
          secureTextEntry= {true}
          onChangeText={ (textPassword) => this.setState({textPassword})}

        />

        <Button
          ref = "boton-aceptar"
          title = "Entrar"
          color = "#841584"
          accessibilityLabel = "Quieres saber mas del boton purpura?"
          onPress = {this._onPressButton}
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