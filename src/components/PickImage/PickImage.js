//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import imagePlaceholder from '../../assets/beautiful-place.jpg';
// create a component
class PickImage extends Component {

    state = {
        pickedImaged: null
    }

    options = {
        title: 'Pick an Image',
        customButtons: [
            {
                name: 'fb',
                title: 'Choose Photo from Facebook'
            }
        ],
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    };

    pickImageHandler = () => {
        ImagePicker.showImagePicker({
            title: "Pick an Image"
        }, res => {
            if (res.didCancel) {
                console.log("user cancelled");
            }else if(res.error){
                console.log("Error",res.error);
            }else{
                this.setState({
                    pickedImaged:{uri: res.uri}
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Image source={this.state.pickedImaged} style={styles.previewImage}/>
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={this.pickImageHandler }></Button>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
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
    }
});

//make this component available to the app
export default PickImage;
