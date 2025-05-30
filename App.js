import React, { useState } from 'react';
import { View } from 'react-native';
import LoginScreen from './src/LoginScreen';
import CadastroScreen from './src/CadastroScreen';
import HomeScreen from './src/HomeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const renderScreen = () => {
    if (currentScreen === 'login') {
      return (
        <LoginScreen
          onNavigateToRegister={() => setCurrentScreen('register')}
          onLoginSuccess={() => setCurrentScreen('home')}
        />
      );
    } else if (currentScreen === 'register') {
      return (
        <CadastroScreen
          onNavigateBack={() => setCurrentScreen('login')}
        />
      );
    } else if (currentScreen === 'home') {
      return (
        <HomeScreen />
      );
    }
    return null;
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
    </View>
  );
}
