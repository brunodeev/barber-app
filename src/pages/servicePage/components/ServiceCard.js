import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServiceCard = (service) => {
    return (
        <View style={styles.container}>
            <Text>{service.name}</Text>
            <Text>{service.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 65,
        width: 350,
        flexDirection: 'row',
        backgroundColor: '#4F4130',
        borderRadius: 12,
    },
});

export default ServiceCard;