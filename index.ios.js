import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'



export default class playapp extends Component {

  render() {
    return (
      <AppNavigator />
    )
  }


}

const styles = StyleSheet.create({


});

AppRegistry.registerComponent('playapp', () => playapp);
