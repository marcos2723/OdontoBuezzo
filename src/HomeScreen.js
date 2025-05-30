import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao app do Dr. Buezzo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAEBD9',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B3B4F',
  },
});
