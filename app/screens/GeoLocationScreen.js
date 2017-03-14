import React, { Component } from 'react';
import {StyleSheet, Text, Navigator, Alert, Dimensions } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import MapView from 'react-native-maps'

const {height, width} = Dimensions.get('window');

class GeoLocationScreen extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (

      <ViewContainer>
        <StatusBarBackground style = {{backgroundColor: "skyblue" }} />

        <Text> Aqui me toca poner el mapita</Text>

        <MapView style = {styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
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
    width: 250,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },


});

module.exports = GeoLocationScreen