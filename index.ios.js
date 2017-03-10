import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TabBarIOS} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'



export default class playapp extends Component {

  render() {
    return (
      <AppNavigator
        initialRoute ={{ident: "PeopleIndex"}}
      />
    )
  }


}

const styles = StyleSheet.create({


});

AppRegistry.registerComponent('playapp', () => playapp);
