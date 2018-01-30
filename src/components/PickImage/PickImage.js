//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

import imagePlaceholder from '../../assets/beautiful-place.jpg';
// create a component
class PickImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                  <View style={styles.placeholder}>
                        <Image source={imagePlaceholder} style={styles.previewImage}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Pick Image"
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
    previewImage: {
        width: '100%',
        height: "100%"
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
    },
});

//make this component available to the app
export default PickImage;
