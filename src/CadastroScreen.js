import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CadastroScreen({ onNavigateBack }) {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      setError('CPF inválido. Use o formato 000.000.000-00.');
      return;
    }

    setError(null);
    console.log({ name, cpf, email, password, birthDate });
    // Você pode chamar uma função de cadastro aqui se quiser.
  };

  const formatCpf = (text) => {
    const digits = text.replace(/\D/g, '').slice(0, 11);
    const parts = [];
    if (digits.length > 0) parts.push(digits.slice(0, 3));
    if (digits.length > 3) parts.push(digits.slice(3, 6));
    if (digits.length > 6) parts.push(digits.slice(6, 9));
    if (digits.length > 9) parts.push(digits.slice(9, 11));
    let formatted = parts[0] || '';
    if (parts[1]) formatted += '.' + parts[1];
    if (parts[2]) formatted += '.' + parts[2];
    if (parts[3]) formatted += '-' + parts[3];
    return formatted;
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Cadastro</Text>

        {error && <Text style={styles.error}>{error}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#A38F8F"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="CPF (000.000.000-00)"
          placeholderTextColor="#A38F8F"
          keyboardType="numeric"
          value={cpf}
          onChangeText={(text) => setCpf(formatCpf(text))}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#A38F8F"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de nascimento (DD/MM/AAAA)"
          placeholderTextColor="#A38F8F"
          keyboardType="numbers-and-punctuation"
          value={birthDate}
          onChangeText={setBirthDate}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a senha"
          placeholderTextColor="#A38F8F"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="#A38F8F"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.footerText} onPress={onNavigateBack}>
          Voltar para o login
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4B3B4F',
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#4B3B4F',
    fontSize: 14,
    color: '#A38F8F',
    marginBottom: 24,
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
  },
  footerText: {
    marginTop: 32,
    fontSize: 12,
    color: '#4B3B4F',
    textDecorationLine: 'underline',
  },
});
