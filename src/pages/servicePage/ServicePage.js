import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import services from '../../mocks/services';
import ServiceCard from './components/ServiceCard';

const ServicePage = () => {

    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        const backgroundColor = item.name === selectedId ? '#4F4130' : '#61503C';
        const color = item.name === selectedId ? 'white' : '#d2d2d2';
        const weight = item.name === selectedId ? '500' : 'regular';
        const selected = item.name === selectedId ? 
    
        return (
          <ServiceCard
            service={item}
            onPress={() => setSelectedId(item.name)}
            backgroundColor={backgroundColor}
            textColor={color}
            fontWeight={weight}
          />
        );
      };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light'/>
            <View style={styles.content}>
                <Text>Escolha seu serviço</Text>
                <FlatList
                    data={services}
                    renderItem={renderItem}
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