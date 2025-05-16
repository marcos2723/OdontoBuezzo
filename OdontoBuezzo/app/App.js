import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          
          style={styles.logo}
          resizeMode="cover"
        />
        <Text style={styles.welcomeText}>SEJA BEM-VINDO</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#A38F8F"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#A38F8F"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Ainda não é cliente?
          <Text style={styles.link} onPress={() => navigation.navigate('Registrar')}>
            {' '}Registrar
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEBD9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#FAEBD9',
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  logo: {
    width: 96,
    height: 96,
    borderRadius: 24,
    marginBottom: 32,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#4B3B4F',
    textTransform: 'uppercase',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#4B3B4F',
    fontSize: 14,
    color: '#A38F8F',
    marginBottom: 24,
    fontVariant: ['small-caps'],
  },
  button: {
    width: '100%',
    backgroundColor: '#4B3B4F',
    borderRadius: 999,
    paddingVertical: 10,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'monospace',
  },
  footerText: {
    marginTop: 32,
    fontSize: 12,
    color: '#A38F8F',
    textTransform: 'uppercase',
  },
  link: {
    color: '#4B3B4F',
    textDecorationLine: 'underline',
    textTransform: 'none',
  },
});