import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import services from '../../mocks/services';
import ServiceCard from './components/ServiceCard';

const ServicePage = () => {

    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        const backgroundColor = item.name === selectedId ? '#4F4130' : '#61503C';
        const color = item.name === selectedId ? 'white' : '#BBBBBB';
        const disabled = item.name === selectedId ? true : false;
    
        return (
          <ServiceCard
            service={item}
            onPress={() => setSelectedId(item.name)}
            backgroundColor={backgroundColor}
            textColor={color}
            disabled={disabled}
          />
        );
      };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light'/>
            <View style={styles.content}>
                <Text style={{flex: 1}}>Escolha seu serviço</Text>
                <FlatList
                    data={services}
                    renderItem={renderItem}
                    horizontal={false}
                    scrollEnabled={false}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: 'white'}}>Próximo</Text>
                </TouchableOpacity>
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
        paddingHorizontal: 12,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#283130',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
});