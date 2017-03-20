import React, { Component } from 'react';
import {StyleSheet, Text, Navigator, Alert, Dimensions, TextInput, Button, Image, View } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

const {height, width} = Dimensions.get('window');

class LoginScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    }
   }


  _onPressButton(){
    Alert.alert("funciona el boton: Login -> " + this.state.email +":" + this.state.password)

  }


  render() {

    return (
      <ViewContainer style = {{backgroundColor: "skyblue"}} >

        <Image style = {styles.fondo} source ={require('../../image/Cloudy.jpeg')}>

          <StatusBarBackground style ={{backgroundColor: "black"}} />

          <View style = {styles.casillaFoto} >

            <Image style = {styles.logo} source ={{ uri:'https://placehold.it/120x120/861686'} }/>



          </View>
          <View style = {styles.casillaFoto} >

            <TextInput
              ref = "login"
              autoFocus = {true}
              placeholder="Usuario"
              style={styles.inputLogin}
              onChangeText={ (email) => this.setState({email})}
              value={this.state.email}
              autoCapitalize='none'
              keyboardType='email-address'
              blurOnSubmit={true}
            />

            <TextInput
              ref = "password"
              placeholder="Contraseña"
              style={styles.input}
              secureTextEntry= {true}
              onChangeText={ (password) => this.setState({password})}
              value={this.state.password}
              autoCapitalize='none'
              blurOnSubmit={true}
            />

            <Button
              ref = "boton-aceptar"
              title = "Entrar"
              color = "#841584"
              accessibilityLabel = "Quieres saber mas del boton purpura?"
              onPress = {() => {
                this._onPressButton()            }
              }
            />
          </View>

        </Image>

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
    flexDirection: 'column'
  },
  fondo: {
    width: width,
    height: height,
  },
  inputLogin: {
    paddingLeft: 10, // Texto de placeholder
    marginLeft: 25,
    marginRight: 25,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 160,
    backgroundColor: 'white',
  },
  input: {
    paddingLeft: 10,
    marginLeft: 25,
    marginRight: 25,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 3,
    backgroundColor: 'white',

  },
  logo: {
    marginTop: 100,
    height: 120,
    width: 120,
  },
  casillaFoto: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },

});

module.exports = LoginScreen