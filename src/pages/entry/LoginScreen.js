import React from 'react';
import { Image, StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import barber from '../../assets/barber.png';

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Entrar</Text>
            <ScrollView>
                <Image source={barber} style={styles.image}/>
                <View style={styles.inputs}>
                    <TextInput placeholder='Nome' onChange={() => {}} style={styles.input}/>
                    <TextInput placeholder='Senha' onChange={() => {}} style={styles.input}/>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: '#FFF', fontSize: 17 }}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 30,
        height: 40,
        textAlign: 'center',
    },
    image: {
        marginTop: 50,
        justifyContent: 'center',
        width: '100%',
        height: 250,
    },
    input: {
        backgroundColor: '#e9e9e9',
        fontSize: 18,
        borderRadius: 15,
        height: 55,
        marginHorizontal: 14,
        paddingHorizontal: 12,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: 0,
        shadowOpacity: .3,
        shadowRadius: 2.5,
    },
    inputs: {
        marginVertical: 30,
    },
    button: {
        marginVertical: 20,
        backgroundColor: '#283130',
        height: 50,
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
});