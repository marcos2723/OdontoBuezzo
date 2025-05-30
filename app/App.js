// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Importar
import { Ionicons } from '@expo/vector-icons'; // Ou sua biblioteca de ícones preferida

// Importe suas telas
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import HomeScreen from './screens/HomeScreen'; // Tela principal de conteúdo (ex: DentalClinicScreen)
import Agendamento from './screens/Agendamento';
import Procedimento from './screens/Procedimento';
// Se tiver outras telas para as abas, importe-as também

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); // Criar instância do Tab Navigator

// Componente para o Bottom Tab Navigator
function MainAppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Geralmente, as telas dentro das abas cuidam de seus próprios cabeçalhos
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = focused ? 30 : 28; // Exemplo de tamanho diferente para ícone focado

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Agendamento') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Procedimentos') {
            iconName = focused ? 'medkit' : 'medkit-outline'; // Exemplo de ícone
          }
          // Adicione mais 'else if' para outras abas aqui

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFFFFF',    // Cor do ícone ativo (Branco, para combinar com seu tema anterior)
        tabBarInactiveTintColor: '#A0A0A0',  // Cor do ícone inativo (Cinza claro)
        tabBarStyle: {
          backgroundColor: '#4B3B56', // Fundo Roxo Escuro (do seu tema anterior)
          paddingTop: 5,
          // paddingBottom: Platform.OS === 'ios' ? 20 : 5, // Para área segura no iOS
          height: 60, // Altura da barra de abas
        },
        tabBarShowLabel: false, // Esconde os nomes abaixo dos ícones, se desejar
      })}
    >
      {/* Suas abas */}
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Agendamento" component={Agendamento} />
      <Tab.Screen name="Procedimentos" component={Procedimento} />
      {/* Adicione outras Tab.Screen conforme necessário */}
    </Tab.Navigator>
  );
}

// Seu Stack Navigator principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ title: 'Crie sua Conta' }}
        />
        {/* Após o login, navega para o conjunto de abas principais */}
        <Stack.Screen
          name="MainApp" // Esta rota agora leva ao TabNavigator
          component={MainAppTabs}
          options={{ headerShown: false }} // Esconde o cabeçalho do Stack para esta tela
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}