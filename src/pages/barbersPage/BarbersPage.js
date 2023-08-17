import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import barbers from '../../mocks/barbers';
import BarberCard from './components/BarberCard';

const BarbersPage = () => {
    return (
        <SafeAreaView>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={barbers}
                renderItem={({item}) => <BarberCard name={item.name} image={item.image}/>}
            />
        </SafeAreaView>
    );
};

export default BarbersPage;