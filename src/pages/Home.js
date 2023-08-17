import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Home = (barber) => {

  const route = useRoute();

  return (
    <View>
      <Text>Bem vindo!! Voce escolheu o {route.params?.name}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});