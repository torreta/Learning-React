'use strict'

import React, { Component } from 'react';
import {StyleSheet, Navigator, Text, View} from 'react-native';
import PeopleIndexScreen from '../screens/PeopleIndexScreen'
import PersonShowScreen from '../screens/PersonShowScreen'



class AppNavigator extends Component {

  _renderScene(route, navigator){
    var globalNavigatorProps = { navigator }

      switch(route.ident){
        case "PeopleIndex":
          return(
            <PeopleIndexScreen {...globalNavigatorProps}/>
          )
          break;
        case "PersonShow":
          return(
            <PersonShowScreen {...globalNavigatorProps} person = {route.person}/>
        )
        break;
        default:
          return(
           <Text>{`YUP, messed something ${route.ident}`} </Text>
          )
          break;
      }
  }

  render() {
    return (

      <Navigator
        initialRoute={{ident: "PeopleIndex"}}
        ref="appNavigator"
        style = {styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({ ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight}) }
      />

    )
  }


}

const styles = StyleSheet.create({


});

module.exports = AppNavigator
