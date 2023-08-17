import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BarberCard = barber => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={barber.image} style={styles.image}/>
            </View>
            <Text style={styles.text}>{barber.name}</Text>
        </TouchableOpacity>
    );
};

export default BarberCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
    },
    image:{
        height:100,
        width: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    imageContainer: {
        height: undefined,
        width: 100,
        borderRadius: 100,
    },
    text: {
        fontSize: 20,
    },
});