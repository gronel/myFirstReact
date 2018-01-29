import React, { Component } from "react";
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { deletePlace } from '../../store/actions/index';

class PlaceDetail extends Component {

placedDeletedHandler = () => {
 this.props.onDeletePlace(this.props.selectedPlace.key);
 this.props.navigator.pop();
};

  render() {
    return (
      <View style={styles.Container}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableNativeFeedback onPress={this.placedDeletedHandler} >
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>

          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}


  const styles = StyleSheet.create({
    Container: {
      margin: 22
    },
    placeImage: {
      width: "100%",
      height: 200
    },
    placeName: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 28
    },
    deleteButton: {
      alignItems: 'center'
    }
  });

  const mapDispatchToProps = dispatch => {
    return {
      onDeletePlace: (key) => dispatch(deletePlace(key))
    }
  };

  export default connect(null,mapDispatchToProps)(PlaceDetail);
