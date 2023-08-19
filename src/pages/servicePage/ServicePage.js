import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import services from '../../mocks/services';

const ServicePage = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light'/>
            <View style={styles.content}>
                <Text>Escolha seu serviço</Text>
                <FlatList
                    data={services}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                />
            </View>
        </SafeAreaView>
    );
};

export default ServicePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#61503C',
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
});