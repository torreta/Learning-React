
import { AsyncStorage, ActivityIndicator, StyleSheet, View } from 'react-native';
import React, { Component }  from 'react';

/*
 * Http requests to the API wrapper
 * Several utilities functions realated to the token, roles and app modes.
 */
export var ApiUtils = {
  checkStatus: function(response) {
    console.log("estatus de la llamada que llego: "+response.status)
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      throw new Error(response);
    }

  },

  get: async function(url, body={}){

    let token = await AsyncStorage.getItem('token');
    return fetch(url,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
      .then(ApiUtils.checkStatus)
      .then(response => response.json());
  },

  post: async function(url, body={}){

    let token = await AsyncStorage.getItem('token');

    return fetch(url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(body)
      })
      .then(ApiUtils.checkStatus)
      .then(response => response.json());
  },

  put: async function(url, body={}){

    let token =  await AsyncStorage.getItem('token');

    return fetch(url,
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(body)
      })
      .then(ApiUtils.checkStatus)
      .then(response => response.json());
  },

  delete: async function(url, body={}){

    let token =  await AsyncStorage.getItem('token');

    return fetch(url,
      {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(body)
      })
      .then(ApiUtils.checkStatus)
      .then(response => response.json());
  },

};


export class LoadingOverlay extends Component {
  render() {
    return (
      <View style={styles.overlay}>
        <ActivityIndicator style={styles.spinner} size="large"/>
      </View>
    );
  }
}

export default API = {
  url: 'https://jsonplaceholder.typicode.com/'
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    justifyContent: 'center',
    backgroundColor: '#000000',
    bottom:0,
    right:0
  },
  spinner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 8,
  },
});
