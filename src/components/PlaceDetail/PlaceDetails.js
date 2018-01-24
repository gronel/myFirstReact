import React from 'react';
import {Modal,View,Image,Text,Button} from 'react-native';


const placeDetails = props => (
    <Modal>
        <View>
            <Image source={props.selectedPlace.placeImage}/>
            <Text>{props.selectedPlace.placeName}</Text>
            <View>
                <Button/>
                <Button/>
            </View>
        </View>
    </Modal>
)



export default placeDetails;