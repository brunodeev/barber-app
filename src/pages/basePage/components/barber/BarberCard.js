import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import barberiro from '../../../../assets/images/barbeiro.jpeg';

const BarberCard = ({name}) => {
    return (
        <View style={styles.container}>
            <Image source={barberiro} style={styles.image}/>
            <Text style={styles.title}>{name}</Text>
        </View>
    );
};

export default BarberCard;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 110,
        height: 160,
        borderRadius: 15,
        backgroundColor: '#fff',
        marginVertical: 15,
        marginLeft: 20,
        marginRight: -5,
    },
    image: {
        width: '80%',
        height: 80,
        borderRadius: 100,
    },
    title: {
        fontSize: 18,
    },
});