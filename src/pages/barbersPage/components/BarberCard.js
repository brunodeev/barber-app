import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const BarberCard = (barber) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate('ServicePage', {name: barber.name, image: barber.image})}}>
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
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
    },
    image:{
        height:100,
        width: 100,
        borderRadius: 50,
    },
    imageContainer: {
        borderWidth: 2.5,
        borderColor: '#5e5141',
        height: undefined,
        width: undefined,
        borderRadius: 100,
    },
    text: {
        fontSize: 20,
    },
});