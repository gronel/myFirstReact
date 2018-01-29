//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
// create a component
class FindPlace extends Component {

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event =>{
        if(event.type ==="NavBarButtonPress"){
            if(event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }
    }
    
    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key == key
        });

        this.props.navigator.push({
            screen: 'myFirstReact.PlaceDetailScreen',
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace
            }

        });
    }

    render() {
        return (
            <View>
                <PlaceList
                    places={this.props.places}
                    onItemSelected={this.itemSelectedHandler} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

//make this component available to the app
export default connect(mapStateToProps)(FindPlace);
