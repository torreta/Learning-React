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

  constructor(props){super(props) }

  render() {
    return (

      <ViewContainer>
        <StatusBarBackground style = {{backgroundColor: "skyblue" }} />
        <Text style={{marginTop: 100, fontSize: 20}}> {`Person Show Screen`} </Text>
        <Text style = {styles.personName}> {` ${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`} </Text>
      </ViewContainer>


    )
  }
}

const styles = StyleSheet.create({
  personName: {
    marginLeft: 20,
  }

});

module.exports = PeopleShowScreen
