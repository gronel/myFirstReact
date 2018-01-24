import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
    // const placeOutput = props.places.map((place,i) => (
    //     <ListItem
    //      key={i}
    //      placeName={place} 
    //     onItemPressed={() => props.onItemDeleted(i)}/>
    //     ));
    return (
        // <ScrollView style={styles.listContainer}>
        //   {placeOutput}
        // </ScrollView>

        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)} />
            )}
        />
    )
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});


export default placeList;

