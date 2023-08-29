import React from 'react';
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
        height: 60,
        width: 380,
        flexDirection: 'row',
        borderRadius: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 3,
    },
    text: {
        fontSize: 23,
        fontFamily: 'Manrope-Light',
    },
    price: {
        fontSize: 20,
        fontFamily: 'Manrope-Light',
    },
});

export default ServiceCard;