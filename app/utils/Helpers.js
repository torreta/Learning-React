import API from './api.js';
import realm from '../models/schema.js';
import { AsyncStorage, ActivityIndicator, StyleSheet, View } from 'react-native';
import React, { Component }  from 'react';

/*
 * Http requests to the API wrapper
 * Several utilities functions realated to the token, roles and app modes.
 */
export var ApiUtils = {
  checkStatus: function(response) {

    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      throw new Error(response);
    }

  },

  setToken: function(token){
    AsyncStorage.removeItem('token');
    AsyncStorage.setItem('token', token);
  },

  getToken: async function(){
    return await AsyncStorage.getItem('token');
  },

  removeToken: function(){
    AsyncStorage.removeItem('token');
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

  setRoles: function(roles){
    AsyncStorage.removeItem('roles');
    //AsyncStorage.setItem('roles', {'customer'});
  },

  cleanRoles: function(){
    //AsyncStorage.setItem('roles', ['customer']);
  },

  checkToken: async function(){
    let url = API.url + 'verify';

    return this.post(url)
              .catch((error) => {
                this._getToken();
              });
  },

  acquireToken: async function(){
    return Keychain
      .getInternetCredentials(API.url)
      .then((credentials) => {

        let email = credentials.username;
        let password = credentials.password;
        this._getTokenWithUserCredentials(email, password);
      }).catch( (error) => {
        this._getTokenWithClientCredentials();
      });
  },

  acquireTokenWithUser: async function(email, password){

    let url = API.url + 'authenticate';

    return fetch(url,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      })
    .then(this.checkStatus)
    .then(response => response.json())
    .then(response => this._requestSuccessCredentials(response, email, password))
    .catch( (error) => {
      this._getTokenWithClientCredentials();
    });

  },

  saveUserToken: function(sresponse, email, password){

    try {
      ApiUtils.setToken(response.auth_token);
      ApiUtils.setRoles(response.roles);
    } catch (error) {
      return this._getTokenWithClientCredentials();
    }

    Keychain.setInternetCredentials(API.url, email, password)
    .then( () => {
    }).catch( (error) => {
    }).done();

  },

  acquireTokenWithClient: async function(){

    let url = API.url + 'authenticate';

    return fetch(url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'client_uid': API.client_uid,
        })
      })
    .then(this.checkStatus)
    .then(response => response.json())
    .then(response => this._requestSuccessClient(response))
    .catch((error) => {
      Alert.alert(
          "Error",
          'There was an error trying to connect with the server. Please try later.'
      );
    });
  },

  saveClientToken: function(response){
    try {
      ApiUtils.setToken(response.auth_token);
      ApiUtils.cleanRoles();
    } catch (error) {
      Alert.alert(
          "Error",
          'There was an error trying to connect with the server. Please try later.'
      )
    }
  },

  /*
   * Setup app mode depending on auth roles
   */
  setMode: async function (roles){

    let provider = false;
    let mode = await AsyncStorage.getItem('mode');

    // Search for provider a role
    for (var i = 0; i < roles.length; i++) {
      if (roles[i] == 'provider') {
        provider = true;
        break;
      }
    }

    // Mantain provider mode if the user has access to it
    if (provider == true) {
      console.log("MODE PROVIDER");

      await AsyncStorage.removeItem('mode');
      await AsyncStorage.setItem('mode', 'provider');
      return 'provider'
    }else{
      console.log("MODE CUSTOMER");
      await AsyncStorage.removeItem('mode');
      await AsyncStorage.setItem('mode', 'customer');
      return 'customer'
    }

  },

  assignAppointment: async function(appointment, slot){

    let url = API.url + 'appointments/' + appointment.id;

    let body = {
      appointment:{
        appointment_status_id: 2,
        hour_start: slot.start,
        hour_finish: slot.end,
        date_start: slot.date,
        date_finish: slot.date
      }
    };

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

  cancelAppointment: async function(appointment){

    let url = API.url + 'appointments/' + appointment.id;

    let body = {
      appointment:{
        appointment_status_id: 4,
      }
    };

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

  referAppointment: async function(slot){
    let token =  await AsyncStorage.getItem('token');
    return token;
  },

};



export var DBUtils = {

  getCategories: function() {
    let categories = realm.objects('Category');

    let result = [];
    for(var category of categories ){
      result.push(category);
    }
    return result;
  },

  syncCategories: function(categories){

    // Insert all new categories
    for (var category of categories) {
      realm.write(() => {

        realm.create('Category', {
          id: category.id,
          name: category.name,
          description: category.description
        }, true);

      });
    }
  },

  getFavorites: function() {
    let favorites = realm.objects('Favorite');

    let result = [];
    for(var favorite of favorites ){
      result.push(favorite);
    }
    return result;
  },

  checkFavorite: function(id) {
    let favorites = realm.objects('Favorite').filtered('id = '+ id);

    if (favorites.length > 0) {
      return true;
    }else{
      return false;
    }
  },

  syncFavorites: function(favorites){
    // Delete previous data
    realm.write(() => {
      realm.delete(realm.objects('Favorite'));
    });

    // Insert all new categories
    for (var favorite of favorites) {
      realm.write(() => {
        realm.create('Favorite', {
          id: favorite.user_provider.id,
          name: favorite.user_provider.name,
        });
      });
    }

    return DBUtils.getFavorites();
  },

};

/*
 * Fetching and synchronization of services categories to the database
 */
export function fetchCategories(index) {

  let query = API.url + 'categories';

  return fetch(query)
    .then(ApiUtils.checkStatus)

    .then(response => response.json())
    .then((responseJson) => {
      syncCategories(responseJson);
    })
    .catch((error) => {
      getCategories();
    });
}

export function getCategories() {
  let categories = realm.objects('Category');

  let result = [];
  for(var category of categories ){
    result.push(category);
  }
  return result;
}

export function syncCategories(categories) {

  // Insert all new categories
  for (var category of categories) {
    realm.write(() => {

      realm.create('Category', {
        id: category.id,
        name: category.name,
        description: category.description
      }, true);

    });

  }

  return getCategories();

}


export class LoadingOverlay extends Component {
  render() {
    return (
      <View style={styles.overlay}>
        <ActivityIndicator style={styles.spinner} size="large"/>
      </View>
    );
  }
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
