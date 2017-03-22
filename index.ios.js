import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TabBarIOS} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'
import Icon from 'react-native-vector-icons/FontAwesome'



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

        <Icon.TabBarItemIOS
          selected = {this.state.selectedTab === "tab1_index"}
          title = {`TAB 1 - INDEX`}
          iconName="address-book"
          onPress={() => this.setState({selectedTab: "tab1_index"})}
        >
          <AppNavigator
          initialRoute ={{ident: "PeopleIndex"}} />


        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected = {this.state.selectedTab === "tab3_calls"}
          title = {`TAB 3 - USERS (R)`}
          iconName="feed"
          onPress={() => this.setState({selectedTab: "tab3_calls"})}
        >
          <AppNavigator
          initialRoute ={{ident: "UserIndex"}} />

        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected = {this.state.selectedTab === "tab4_geo"}
          title = {`TAB 4 - Map`}
          iconName="map-o"
          onPress={() => this.setState({selectedTab: "tab4_geo"})}
        >
          <AppNavigator
          initialRoute ={{ident: "GeoLocation"}} />

        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected = {this.state.selectedTab === "tab5_login"}
          title = {`TAB 5 - Login`}
          iconName="id-badge"
          onPress={() => this.setState({selectedTab: "tab5_login"})}
        >
          <AppNavigator
          initialRoute ={{ident: "Login"}} />

        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected = {this.state.selectedTab === "tab6_notification"}
          title = {`TAB 6 - notifications`}
          iconName="commenting-o"
          onPress={() => this.setState({selectedTab: "tab6_notification"})}
        >
          <AppNavigator
          initialRoute ={{ident: "Notification"}} />

        </Icon.TabBarItemIOS>

      </TabBarIOS>
    )
  }


}

const styles = StyleSheet.create({


});

AppRegistry.registerComponent('playapp', () => playapp);
