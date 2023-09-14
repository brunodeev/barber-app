import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';

import logo from '../../assets/images/logo.png';
import BarberSection from './components/barber/BarberSection';
import ServiceSection from './components/serviceType/ServiceSection';
import DateSection from './components/date/DateSection';

const BasePage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Image source={logo} style={styles.image}/>
            </View>
            <View style={styles.body}>
                <BarberSection/>
                <ServiceSection/>
                <DateSection/>
             </View>
            <View style={styles.top}>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    );
}

export default BasePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tomato',
    },
    top: {
        width: '100%',
        height: '8%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    body: {
        flex: 1,
        paddingVertical: 20,
        backgroundColor: '#f5f5f5',
    },
});