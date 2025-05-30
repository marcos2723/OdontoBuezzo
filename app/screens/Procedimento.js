import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Exemplo de biblioteca de ícones

const DentalClinicScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Superior */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerCenterContent}>
          <Image
            source={{ uri: 'https://via.placeholder.com/30' }} // Substitua pelo seu logo
            style={styles.logo}
          />
          <Text style={styles.headerText}>Seu Sorriso</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="exit-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Imagem Principal */}
        <Image
          source={{ uri: 'https://via.placeholder.com/400x250' }} // Substitua pela imagem da clínica
          style={styles.mainImage}
        />

        {/* Bloco de Texto */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Cuidamos do seu sorriso com excelência e carinho!
          </Text>
          <Text style={styles.paragraph}>
            Oferecemos serviços de limpeza, restaurações, extrações, clareamento, ortodontia, implantes e próteses. Nossa equipe especializada utiliza tecnologia de ponta para garantir conforto e qualidade no seu atendimento.
          </Text>
          <Text style={styles.cta}>
            Agende sua consulta e descubra um novo motivo para sorrir!
          </Text>
        </View>
      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="briefcase-outline" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="document-text-outline" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0', // Um tom bege claro similar ao da imagem
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 40, // Ajuste para status bar
    paddingBottom: 10,
    backgroundColor: '#6A0DAD', // Roxo escuro similar
  },
  headerCenterContent: {
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 2,
  },
  headerText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20, // Espaço para não sobrepor a navegação inferior
  },
  mainImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'center', // Centraliza o texto
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A235A', // Um tom de roxo mais escuro para o título
    textAlign: 'center',
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    color: '#5D3A7A', // Um tom de roxo para o parágrafo
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 24,
  },
  cta: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A235A',
    textAlign: 'center',
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#3E006F', // Roxo mais escuro para a barra inferior
  },
  navItem: {
    alignItems: 'center',
  },
  // Você pode adicionar estilos para os ícones da barra de navegação se precisar de cores diferentes
  // navIcon: {
  //   color: 'white', // Se os ícones forem brancos como na imagem
  // }
});

export default DentalClinicScreen;