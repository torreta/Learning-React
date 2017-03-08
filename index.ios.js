/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ListView } from 'react-native';

import ViewContainer from './app/components/ViewContainer'
import StatusBarBackground from './app/components/StatusBarBackground'

import message from './temp'

const people = [
                {id: "1", firstName: "Luis", lastName: "Campos", roomNumber: 30},
                {id: "2", firstName: "Wilghe", lastName: "Alzualde", roomNumber: 22},
                {id: "3", firstName: "Anibal", lastName: "Abdulkhalek", roomNumber: 6}
              ]


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
      <View style={styles.personRow}>
        <Text style = {styles.personName}>
          {person.firstName}
        </Text>
      </View>
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
    justifyContent: "center"
  },
  personName: {

  },
});

AppRegistry.registerComponent('playapp', () => playapp);
