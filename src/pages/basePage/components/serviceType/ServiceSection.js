import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import services from '../../../../mocks/services';

import ServiceCard from './ServiceCard';

const ServiceSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione o Serviço:</Text>
            <FlatList
            data={services}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <ServiceCard name={item.price} />}
            style={styles.list}
            />
        </View>
    );
};

export default ServiceSection;

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 20,
    },
});