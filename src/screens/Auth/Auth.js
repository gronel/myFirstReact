import React, {Component} from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    StatusBar,
    ImageBackground
} from 'react-native';

import startMainTabs from '../startMainTabs/startMainTabs';
import DefaultInput from '../../UI/DefaultInput/DefaultInput';
import HeadingText from '../../UI/HeadingText/HeadingText';
import MainText from '../../UI/MainText/MainText';
import ButtonWithBack from '../../UI/Button/Button';

import background from '../../assets/background.jpg';
class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    };

    render() {
        return (
            <ImageBackground source={background} style={styles.backgroundImage}>
                <View style={styles.container}>

                    <MainText>
                        <HeadingText>
                            Please Log In
                        </HeadingText>
                    </MainText>

                    <ButtonWithBack onPress={this.loginHandler} color="#29aaf4">Switch to Login</ButtonWithBack>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your Email Address" style={styles.input}/>
                        <DefaultInput placeholder="Password" style={styles.input}/>
                        <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                    </View>

                    <ButtonWithBack onPress={this.loginHandler} color="#29aaf4">Submit</ButtonWithBack>

                </View>
            </ImageBackground>
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
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    backgroundImage: {
        width: '100%',
        flex: 1
    }

});

export default AuthScreen;