/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceImage from './src/assets/download.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetails'
export default class App extends Component<{}> {

  state = {
    placeName: "",
    places: [],
    selectedPlace:null

  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name:prevState.placeName,
          image: {
            uri:'https://www.google.com.ph/imgres?imgurl=http%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F282513627716-0-1%2Fs-l1000.jpg&imgrefurl=https%3A%2F%2Fwww.ebay.com%2Fitm%2Fmp0031-Itachi-Uchiha-Eyes-Mangekyou-Sharingan-Round-Mouse-Pad-%2F282513627716&docid=VRTzIHdyPpTu0M&tbnid=CU5v0PyEabfyrM%3A&vet=10ahUKEwi5jeW-4e3YAhWLJZQKHYwtD5gQMwiqASgDMAM..i&w=640&h=480&hl=en&authuser=0&bih=647&biw=1366&q=sharingan&ved=0ahUKEwi5jeW-4e3YAhWLJZQKHYwtD5gQMwiqASgDMAM&iact=mrc&uact=8'
          }
        })
      };
    });
    // this.setState({
    //   placeName: ""
    // });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return  place.key !== key;
        })
      }
    })
  };

  placeSelectedHandler = key => {
this.setState(prevState => {
  return {
    selectedPlace:prevState.places.find(place => {
      return place.key === key;
    })
  }
})
  };

  render() {

    return (
      <View style={styles.container}>
      <PlaceDetail selectedPlace={this.state.selectedPlace} />
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeSubmitHandler={this.placeSubmitHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
