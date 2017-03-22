import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'

import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

class NotificationScreen extends Component {

    render(){
        return (

          <ViewContainer>
            <StatusBarBackground style = {{backgroundColor: "skyblue" }} />


                <Text style={styles.Text}>
                    nada notification
                </Text>


          </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({
  Text: {
    height: 20,
  }

})

module.exports = NotificationScreen

