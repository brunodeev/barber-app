import React from 'react';
import { Image, StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import barber from '../../assets/barber.png';

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={barber} style={styles.image}/>
            </View>
            <View style={styles.inputs}>
                <TextInput placeholder='Email' onChange={() => {}} autoCorrect={false} keyboardType='email-address' style={styles.input}/>
                <TextInput placeholder='Senha' onChange={() => {}} secureTextEntry={true} style={styles.input}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#FFF', fontSize: 17 }}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: {
        height: 20,
        width: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#e9e9e9',
        width: '90%',
        fontSize: 18,
        borderRadius: 15,
        height: 55,
        paddingHorizontal: 12,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: 0,
        shadowOpacity: .3,
        shadowRadius: 2.5,
    },
    inputs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
        width: '90%',
    },
    button: {
        width: '90%',
        marginVertical: 20,
        backgroundColor: '#283130',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
});