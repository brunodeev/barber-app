import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Home = () => {

  const route = useRoute();

  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Image source={route.params?.image} style={styles.image}/>
        <Text style={styles.name}>{route.params?.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image:{
    height: 40,
    width: 40,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 20,
    lineHeight: 42,
    fontWeight: '600',
  },
});