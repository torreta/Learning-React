import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Navigator, Text, View} from 'react-native';
import PeopleIndexScreen from './app/screens/PeopleIndexScreen'

export default class playapp extends Component {

  _renderScene(route, navigator){
    var globalNavigatorProps = { navigator }

      switch(route.ident){
        case "PeopleIndex":
          return(
            <PeopleIndexScreen {...globalNavigatorProps}/>
          )
          break;
        default:
          return(
            <PeopleIndexScreen {...globalNavigatorProps}/>
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
