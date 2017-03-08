/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

import ViewContainer from './app/components/ViewContainer'
import StatusBarBackground from './app/components/StatusBarBackground'

import message from './temp'

export default class playapp extends Component {
  render() {
    return (

      <ViewContainer>
        <StatusBarBackground backgroundColor={"skyblue"} />
        <Text style = {{backgroundColor: "coral"}}>
          you see? works
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('playapp', () => playapp);
