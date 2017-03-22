import React, { Component } from 'react';
import { View, StyleSheet, Text, Picker, AppState } from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'

class NotificationScreen extends Component {

    constructor(props){
        super(props)

        this.handleAppStateChange =this.handleAppStateChange.bind(this)
        this.state = {
            seconds: 5,
        }
    }

    componentDidMount(){
        console.log("standart")
        AppState.addEventListener('change', this.handleAppStateChange)

    }

    componentWillUnmount(){
        console.log("sacando componente")
        AppState.removeEventListener('change', this.handleAppStateChange)

    }

    handleAppStateChange(appState) {

        if (appState === 'background') {
            //TODO: Planeando notificacion
            console.log('app is in background', this.state.seconds)
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

