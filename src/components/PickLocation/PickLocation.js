//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

// create a component
class PickLocation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Text>Map</Text>
                </View>
                <View style={styles.button}>
                    <Button title="Locate Me"
                     onPress={()=> alert('Hi!')}></Button>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems:"center"
    },
    button: {
        margin: 8
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: "80%",
        height: 150
    },
});

//make this component available to the app
export default PickLocation;
