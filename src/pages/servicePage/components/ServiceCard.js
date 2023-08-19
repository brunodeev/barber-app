import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ServiceCard = ({name, price}) => {

    const [isSelected, setIsSelected] = useState(false);

    const newStyle = styles(isSelected);

    return (
        <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
            <View style={newStyle.container}>
            <Text style={newStyle.text}>{name}</Text>
            <Text style={newStyle.price}>R$ {price},00</Text>
        </View>
        </TouchableOpacity>
    );
};

const styles = (isSelected) => StyleSheet.create({
    container: {
        height: 65,
        width: 350,
        flexDirection: 'row',
        backgroundColor: isSelected ? '#4F4130' : '#61503C',
        borderRadius: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    text: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    price: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'regular',
    },
});

export default ServiceCard;