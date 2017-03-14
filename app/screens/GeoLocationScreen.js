import React, { Component } from 'react';
import {StyleSheet, Text, Navigator, Alert } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'


class GeoLocationScreen extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (

      <ViewContainer>
        <StatusBarBackground style = {{backgroundColor: "skyblue" }} />

        <Text> Aqui me toca poner el mapita</Text>

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

});

module.exports = GeoLocationScreen