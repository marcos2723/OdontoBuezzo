// screens/CadastroScreen.js
import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

// Mude o nome da função para CadastroScreen
export default function CadastroScreen({ navigation }) {
  // Função para simular o registro e navegar para Login (ou Home)
  const handleRegister = () => {
    // Aqui você colocaria sua lógica de registro
    console.log('Usuário registrado!');
    // Exemplo: Navegar de volta para Login após o registro
    navigation.navigate('Login');
    // Ou, se quiser ir para a Home após o registro:
    // navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.formWrapper} keyboardShouldPersistTaps="handled">
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/22bc6809-65aa-4f0a-e0d9-26968f4d249d.jpg' }}
          style={styles.logo}
        />
        <Text style={styles.title}>CADASTRE SUA CONTA</Text>

        <TextInput placeholder="Nome completo" style={styles.input} placeholderTextColor="#9E8F8F" />
        <TextInput placeholder="CPF" style={styles.input} placeholderTextColor="#9E8F8F" />
        <TextInput placeholder="E-mail" keyboardType="email-address" style={styles.input} placeholderTextColor="#9E8F8F" />
        <TextInput placeholder="Digite sua senha" secureTextEntry style={styles.input} placeholderTextColor="#9E8F8F" />
        <TextInput placeholder="Confirme sua senha" secureTextEntry style={styles.input} placeholderTextColor="#9E8F8F" />
        <TextInput placeholder="dd/mm/aaaa" style={styles.input} placeholderTextColor="#9E8F8F" />

        {/* Adicione o onPress para o botão de registrar */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        {/* Opcional: Botão para voltar para Login */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 15 }}>
          <Text style={{ color: '#4B3B56', textAlign: 'center' }}>Já tenho conta</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEBD9',
  },
  formWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginBottom: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    textTransform: 'uppercase',
    marginBottom: 32,
    letterSpacing: 1,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#9E8F8F',
    paddingVertical: 8,
    marginBottom: 16,
    color: '#000', // Cor do texto digitado
    fontSize: 14,
    fontWeight: '300',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#4B3B56',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 999,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold', // Ajustado para 'bold'
  },
});