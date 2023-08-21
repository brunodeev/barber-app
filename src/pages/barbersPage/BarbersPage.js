import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import barbers from '../../mocks/barbers';
import BarberCard from './components/BarberCard';

const BarbersPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.text}>Selecione seu barbeiro:</Text>
            </View>
            <View style={{height: 150,}}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={barbers}
                    renderItem={({item}) => <BarberCard name={item.name} image={item.image}/>}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center'}}
                    style={styles.list}
                />
            </View>
        </SafeAreaView>
    );
};

export default BarbersPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textView: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 35,
        fontWeight: '500',
    },
    list: {
        width: '100%',
    },
});