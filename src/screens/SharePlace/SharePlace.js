//import liraries
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    ScrollView,
    Image
} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';

import {} from '../../store/actions/index';
import {addPlace} from '../../store/actions/places';
import MainText from '../../UI/MainText/MainText';
import HeadingText from '../../UI/HeadingText/HeadingText';

import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

// create a component
class SharePlace extends Component { 

    state = {
        placeName: ""
    };
    constructor(props) {
        super(props);
        this
            .props
            .navigator
            .setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this
                    .props
                    .navigator
                    .toggleDrawer({side: "left"})
            }
        }
    }

    placeAddedHandler = () => {
        if (this.state.placeName.trim() !== "") {
            this.props.onAddPlace(this.state.placeName);
        }

    };

    placeNameChangeHandler = val => {
        this.setState({placeName: val})
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>
                            <Text>Share a Place with us!</Text>
                        </HeadingText>
                    </MainText>

                    <PickImage/>

                    <PickLocation/>

                    <PlaceInput
                        placeName={this.state.placeName}
                        onChangeText={this.placeNameChangeHandler}/>

                    <View style={styles.button}>
                        <Button title="Share the Place" onPress={this.placeAddedHandler}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(SharePlace)
