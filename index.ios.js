/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import ViewContainer from './app/components/ViewContainer'
import StatusBarBackground from './app/components/StatusBarBackground'
import _ from 'lodash'

import message from './temp'
import people from './temp'



export default class playapp extends Component {

  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2})

    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }

  }


  render() {
    return (

      <ViewContainer>
        <StatusBarBackground style = {{backgroundColor: "skyblue" }} />

        <Text style = {{backgroundColor: "coral"}}>
          you see? works
        </Text>

        <ListView style = {{marginTop: 100}}
          dataSource = {this.state.peopleDataSource}
          renderRow = {(person) => { return this._renderPersonRow(person)}}>


        </ListView>
      </ViewContainer>


    );
  }

  _renderPersonRow(person){
    return(
      <TouchableOpacity style={styles.personRow} onPress = {(event) => console.log(person) } >
        <Text style = {styles.personName}> {` ${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`} </Text>

        <View style = {{flex: 1}} />

        <Icon name="chevron-right"  style = {styles.personMoreIcon}/>

      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 30,
  },
  personName: {
    marginLeft: 20,
  },
  personMoreIcon: {
    color: "green",
    height: 20,
    width: 20,
    marginRight: 20
  }

});

AppRegistry.registerComponent('playapp', () => playapp);
