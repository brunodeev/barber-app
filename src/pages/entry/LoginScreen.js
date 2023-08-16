import React from 'react';
import { Image, StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import barber from '../../assets/barber.png';

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={barber} style={styles.image}/>
                        </View>
                        <View style={styles.inputs}>
                            <TextInput placeholder='Email' onChange={() => {}} autoCorrect={false} keyboardType='email-address' style={styles.input}/>
                            <TextInput placeholder='Senha' onChange={() => {}} secureTextEntry={true} style={styles.input}/>
                            <TouchableOpacity style={styles.forget}>
                                <Text style={{color: '#b1b1b1', textAlign: 'right'}}>Esqueci a senha</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{ color: '#FFF', fontSize: 17 }}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.haveAccount}>
                        <Text style={{color: '#b1b1b1'}}>Não tem uma conta? </Text>
                        <TouchableOpacity>
                            <Text>Crie uma</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
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
        marginBottom: 50,
        height: 200,
        width: 350,
    },
    image: {
        height: undefined,
        width: undefined,
        flex: 1,
    },
    scrollView: {
        flex: 1,
        marginTop: 20,
        width: '100%',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#e9e9e9',
        width: '95%',
        fontSize: 18,
        borderRadius: 15,
        height: 45,
        paddingHorizontal: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: .2,
        shadowRadius: 2.5,
    },
    inputs: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
    },
    forget: {
        paddingRight: 14,
        width: '100%',
    },
    haveAccount: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        width: '95%',
        marginVertical: 20,
        backgroundColor: '#283130',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
});