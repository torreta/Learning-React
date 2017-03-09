import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Navigator, Text, View} from 'react-native';
import PeopleIndexScreen from './app/screens/PeopleIndexScreen'

export default class playapp extends Component {

  render() {
    return (

      <PeopleIndexScreen />

    );
  }


}

const styles = StyleSheet.create({


});

AppRegistry.registerComponent('playapp', () => playapp);
