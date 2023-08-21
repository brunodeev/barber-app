import React from 'react';
import { Image, StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import logo from '../../assets/images/logo.png';

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    return (
        <>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView style={styles.content}>
                <ScrollView contentContainerStyle={styles.scrollView} scrollEnabled={false}>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={logo} style={styles.image}/>
                        </View>
                        <View style={styles.inputs}>
                            <TextInput placeholder='Email' onChange={() => {}} autoCorrect={false} keyboardType='email-address' style={styles.input}/>
                            <TextInput placeholder='Senha' onChange={() => {}} secureTextEntry={true} style={styles.input}/>
                            <TouchableOpacity style={styles.forget}>
                                <Text style={{color: '#b1b1b1', textAlign: 'right'}}>Esqueci a senha</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('BarbersPage')}}>
                                <Text style={{ color: '#FFF', fontSize: 17 }}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                
            </SafeAreaView>
            
        </KeyboardAvoidingView>

        <SafeAreaView style={styles.haveAccount}>
            <Text style={{color: '#b1b1b1'}}>Não tem uma conta? </Text>
            <TouchableOpacity>
                <Text>Crie uma</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    content: {
        flex: 1,
        width: '100%',
    },
    imageContainer: {
        flex: 1,
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        height: 200,
        width: 200,
        marginBottom: 30,
    },
    scrollView: {
        flex: 1,
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
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'start',
        width: '100%',
    },
    forget: {
        paddingRight: 14,
        width: '100%',
    },
    haveAccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
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