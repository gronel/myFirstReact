import React, { Component } from 'react';
import { View, TextInput, StyleSheet,Button, } from 'react-native';

const placeInput = (props) => {

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="An awesome place"
                value={props.placeName}
                onChangeText={props.placeNameChangeHandler}
                style={styles.placeInput}
            />

            <Button
                title="ADD"
                style={styles.placeButton}
                onPress={props.placeSubmitHandler}
            />
        </View>
    )};

    const styles = StyleSheet.create({
        inputContainer: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        placeInput: {
            width: '70%'
        },
        placeButton: {
            width: '30%'
        },
    })



    export default placeInput;

