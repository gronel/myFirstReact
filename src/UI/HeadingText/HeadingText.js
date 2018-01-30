//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const headingText = props => (
     <Text {...props} style={[styles.textheading, props.style]}>{props.children}</Text>
);
// define your styles
const styles = StyleSheet.create({
    textheading:{
        fontSize:28,
        fontWeight:"bold"

    }
});

//make this component available to the app
export default headingText;
