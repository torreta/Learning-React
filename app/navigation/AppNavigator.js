'use strict'

import React, { Component } from 'react';
import {StyleSheet, Navigator, Text, View} from 'react-native';
import PeopleIndexScreen from '../screens/PeopleIndexScreen'
import PersonShowScreen from '../screens/PersonShowScreen'
import UserIndexScreen from '../screens/UserIndexScreen'
import GeoLocationScreen from '../screens/GeoLocationScreen'
import LoginScreen from '../screens/LoginScreen'
import NotificationScreen from '../screens/NotificationScreen'



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
        case "UserIndex":
          return(
            <UserIndexScreen {...globalNavigatorProps} />
        )
        break;
        case "GeoLocation":
          return(
            <GeoLocationScreen {...globalNavigatorProps} />
        )
        break;
        case "Login":
          return(
            <LoginScreen {...globalNavigatorProps} />
        )
        break;
        case "Notification":
          return(
            <NotificationScreen {...globalNavigatorProps} />
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
        initialRoute={this.props.initialRoute}
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
