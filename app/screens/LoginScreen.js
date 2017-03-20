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
    console.log(this)
    Alert.alert("funciona el boton: " + this.state.email +":" + this.state.password + ", que desperdicio")

  }


  render() {
      console.log("estado, correcto?")
      console.log(this)
    return (
      <ViewContainer style = {{backgroundColor: "skyblue"}} >
        <StatusBarBackground style ={{backgroundColor: "black"}} />

        <Text> el login va aqui: </Text>

        <View style = {styles.casillaFoto} >

          <Image style = {styles.logo} source ={{ uri:'https://placehold.it/120x120/861686'} }/>

        </View>

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
            // onSubmitEditing={() => this._signIn()}
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
            // onSubmitEditing={() => this._signIn()}
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
  inputLogin: {
    width: width,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 160,
  },
  input: {
    width: width,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
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