import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TabBarIOS} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'



export default class playapp extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTab: "tab1_index"
    }
  }


  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>

        <TabBarIOS.Item
          selected = {this.state.selectedTab === "tab1_index"}
          title = {`TAB 1 - INDEX`}
          onPress={() => this.setState({selectedTab: "tab1_index"})}
        >
          <AppNavigator
          initialRoute ={{ident: "PeopleIndex"}} />


        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected = {this.state.selectedTab === "tab2_show"}
          title = {`TAB 2 - PERSON`}
          onPress={() => this.setState({selectedTab: "tab2_show"})}
        >
          <AppNavigator
          initialRoute ={{ident: "PersonShow", person: {id: "1", firstName: "Luis", lastName: "Campos", roomNumber: 30}}} />

        </TabBarIOS.Item>

      </TabBarIOS>
    )
  }


}

const styles = StyleSheet.create({


});

AppRegistry.registerComponent('playapp', () => playapp);
