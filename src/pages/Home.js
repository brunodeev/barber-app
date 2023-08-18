import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Home = () => {

  const route = useRoute();

  return (
    <SafeAreaView>
      <Text>Bem vindo!! Voce escolheu o {route.params?.name}</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});