import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Navigator, Text, View} from 'react-native';
import PeopleIndexScreen from './app/screens/PeopleIndexScreen'
import PersonShowScreen from './app/screens/PersonShowScreen'

export default class playapp extends Component {

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
      />

    )
  }


}

const styles = StyleSheet.create({


});

AppRegistry.registerComponent('playapp', () => playapp);
