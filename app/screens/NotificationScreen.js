import React, { Component } from 'react';
import { View, StyleSheet, Text, Picker } from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'

class NotificationScreen extends Component {

    constructor(props){
        super(props)

        this.state = {
            seconds: 5,
        }
    }


    render(){
        return (

          <View style = {styles.container} >
            <StatusBarBackground style = {{backgroundColor: "skyblue" }} />


                <Text style={styles.mensaje}>
                   Tiempo para la Notificación:
                </Text>

                <Picker
                    style = {styles.picker}
                    selectedValue = {this.state.seconds}
                    onValueChange = {(seconds) => this.setState({seconds})}
                >

                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="10" value={10} />
                    <Picker.Item label="15" value={15} />

                </Picker>


          </View>

        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  mensaje: {
    height: 20,
  },
  picker: {
    width: 100,
  },

})

module.exports = NotificationScreen

