import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import services from '../../mocks/services';
import ServiceCard from './components/ServiceCard';

const ServicePage = () => {

    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        const backgroundColor = item.name === selectedId ? '#222929' : '#262f2e';
        const color = item.name === selectedId ? 'white' : '#AAAAAA';
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
                <Text style={styles.text}>Escolha seu serviço</Text>
                <FlatList
                    data={services}
                    renderItem={renderItem}
                    horizontal={false}
                    scrollEnabled={false}
                />
                <TouchableOpacity style={styles.button} activeOpacity={.8}>
                    <Text style={{color: '#283130', fontSize: 18,}}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ServicePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#283130',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    text: {
        color: 'white',
        fontSize: 28,
        paddingTop: 30,
        paddingBottom: 100,
        fontWeight: '600',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom: 50,
    },
});