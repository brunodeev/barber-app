import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BarberCard = barber => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={barber.image} style={styles.image}/>
            </View>
            <Text>{barber.name}</Text>
        </View>
    );
};

export default BarberCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        height:50,
        width: 50,
        borderRadius: 50,
    },
    imageContainer: {
        borderRadius:50,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            height: 2,
            width: 0,
        },
        shadowRadius: 7,
    },
});