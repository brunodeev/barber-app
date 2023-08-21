import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ServiceCard = ({service, backgroundColor, textColor, onPress, disabled}) => {

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={.8}>
            <View style={[styles.container, {backgroundColor: backgroundColor}]}>
                <Text style={[styles.text, {color: textColor}]}>{service.name}</Text>
                <Text style={[styles.price, {color: textColor}]}>R$ {service.price},00</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 65,
        width: 350,
        flexDirection: 'row',
        borderRadius: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 25,
    },
    price: {
        fontSize: 20,
        fontWeight: 'regular',
    },
});

export default ServiceCard;