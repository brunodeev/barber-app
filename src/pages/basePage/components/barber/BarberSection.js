import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import barbers from '../../../../mocks/barbers';

import BarberCard from './BarberCard';

const BarberSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione o Barbeiro:</Text>
            <FlatList
            data={barbers}
            horizontal={true}
            renderItem={({item}) => <BarberCard name={item.name}/>}
            />
        </View>
    );
};

export default BarberSection;

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 20,
    },
});