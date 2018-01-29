import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

import startMainTabs from '../startMainTabs/startMainTabs';
import DefaultInput from '../../UI/DefaultInput/DefaultInput';
class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Please Log In
                </Text>
                <Button title="Switch to Login" onPress={this.loginHandler} />

                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Your Email Address"/>
                    <DefaultInput placeholder="Password"  />
                    <DefaultInput placeholder="Confirm Password" />
                </View>

                <Button title="Submit" onPress={this.loginHandler} />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: "80%"
    },
   
});

export default AuthScreen;