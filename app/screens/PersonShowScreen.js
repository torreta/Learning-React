/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'

import message from '../../temp'
import people from '../../temp'



 class PeopleShowScreen extends Component {

  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2})

    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
   }

  _renderPersonRow(person){
    var i = i+1;
    return(
      <TouchableOpacity style={styles.personRow} onPress = {(event) => this._navigateToPersonShow(person) } >
        <Text style = {styles.personName}> {` ${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`} </Text>

        <View style = {{flex: 1}} />

        <Text style = {{backgroundColor: "coral"}}>
         {`${person.roomNumber}`}
        </Text>

        <Icon name="chevron-right"  style = {styles.personMoreIcon}/>

      </TouchableOpacity>
    )
  }

  _navigateToPersonShow(person){
    this.props.navigator.push({
      ident: "PersonShow",
      person
    })
  }

  render() {
    var personBackgroundColor
      switch(this.props.person.roomNumber){
        case 30:
          personBackgroundColor = "limegreen"
          break;
        case 22:
          personBackgroundColor = "coral"
          break;
        case 6:
          personBackgroundColor = "dodgerblue"
          break;
        case 14:
          personBackgroundColor = "pink"
          break;
        case 44:
          personBackgroundColor = "violet"
          break;
        case 18:
          personBackgroundColor = "grey"
          break
        default:
          personBackgroundColor = "black"
      }

    return (
      <ViewContainer style={{backgroundColor: personBackgroundColor}}>
        <StatusBarBackground style = {{backgroundColor: "skyblue" }} />

        <TouchableOpacity onPress={ () => this.props.navigator.pop()}>
                <Icon name="times" size={30} />
        </TouchableOpacity>

        <ListView style = {{marginTop: 100}}
          dataSource = {this.state.peopleDataSource}
          renderRow = {(person) => { return this._renderPersonRow(person)}}/>

        <Text style={{marginTop: 15, fontSize:20}}>
          {`PERSON SHOW SCREEN`}
        </Text>


      </ViewContainer>


    )
  }
}

const styles = StyleSheet.create({
  personName: {
    marginLeft: 20,
  },
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

module.exports = PeopleShowScreen
