import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import barbers from '../../../../mocks/barbers';

import DateCard from './DateCard';

const DateSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione o Horário:</Text>
            <FlatList
            data={barbers}
            horizontal={true}
            renderItem={({item}) => <DateCard name={item.name}/>}
            />
        </View>
    );
};

export default DateSection;

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 20,
    },
});