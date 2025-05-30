import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform, // Para ajustes de data
} from 'react-native';

// ... restante do código
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Configuração do locale para Português (Brasil)
LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: [
    'Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.',
    'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'
  ],
  dayNames: [
    'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
    'Quinta-feira', 'Sexta-feira', 'Sábado'
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'pt-br';

// Horários disponíveis mockados (em um app real, viriam de uma API)
const MOCK_AVAILABLE_TIMES = {
  '2025-02-27': ['15:15', '15:30', '15:45', '16:00', '16:15', '16:30', '16:45'],
  '2025-03-01': ['09:00', '09:30', '10:00', '10:15', '10:45', '11:30'],
  '2025-03-05': ['14:00', '14:30', '15:00', '16:00'],
  // Adicione mais datas e horários conforme necessário
};

// Componente de Cabeçalho Simulado
const AppHeader = ({ title, onBackPress, showBackButton }) => (
  <View style={styles.headerContainer}>
    {showBackButton ? (
      <TouchableOpacity onPress={onBackPress} style={styles.headerButton}>
        <Text style={styles.headerIconText}>‹</Text> {/* Ícone de voltar */}
      </TouchableOpacity>
    ) : (
      <View style={styles.headerButton} /> // Espaçador para alinhar o título
    )}
    <Text style={styles.headerTitle}>{title}</Text>
    <View style={styles.headerIconsRight}>
      <TouchableOpacity style={styles.headerButton}>
        <Text style={styles.headerIconText}>⚙️</Text> {/* Ícone de Configurações */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerButton}>
        <Text style={styles.headerIconText}>👤</Text> {/* Ícone de Perfil */}
      </TouchableOpacity>
    </View>
  </View>
);

// Componente de Barra de Navegação Inferior Simulado
const BottomNavBar = () => (
  <View style={styles.bottomNavContainer}>
    <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>🏠</Text></TouchableOpacity>
    <TouchableOpacity style={styles.navItem}><Text style={[styles.navIcon, styles.navIconActive]}>📅</Text></TouchableOpacity>
    <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>💬</Text></TouchableOpacity>
    <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>🧑</Text></TouchableOpacity>
  </View>
);

const SchedulingScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [currentCalendarMonth, setCurrentCalendarMonth] = useState(new Date().toISOString().slice(0, 7)); // YYYY-MM

  useEffect(() => {
    // Para simular o "Fevereiro" inicial da imagem se nenhuma data estiver selecionada
    // Ajuste '2025-02-01' para o mês/ano desejado
    const initialDate = '2025-02-01';
    if (!selectedDate) {
        setCurrentCalendarMonth(initialDate.slice(0,7));
    }
  }, []);


  const handleDayPress = (day) => {
    const dateString = day.dateString;
    setSelectedDate(dateString);

    const newMarkedDates = {
      [dateString]: { selected: true, marked: true, selectedColor: '#007bff' }
    };
    setMarkedDates(newMarkedDates);

    const times = MOCK_AVAILABLE_TIMES[dateString] || [];
    setAvailableTimes(times);
    setSelectedTime('');
    setShowTimeSlots(true);
  };

  const handleTimePress = (time) => {
    setSelectedTime(time);
    // Lógica para confirmar o agendamento ou ir para a próxima etapa
    console.log(`Agendamento: Data - ${selectedDate}, Horário - ${time}`);
  };

  const goBackToCalendar = () => {
    setShowTimeSlots(false);
    // Opcional: resetar a data selecionada ao voltar para o calendário
    // setSelectedDate('');
    // setMarkedDates({});
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return '';
    // Adicionar 'T00:00:00' para evitar problemas de fuso horário com toLocaleDateString
    // no Android, que pode interpretar a data como UTC.
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <AppHeader
        title="Agendamento"
        onBackPress={goBackToCalendar}
        showBackButton={showTimeSlots}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {!showTimeSlots ? (
          <View style={styles.calendarViewContainer}>
            <Calendar
              current={currentCalendarMonth + '-01'} // Define o mês inicial a ser exibido
              onDayPress={handleDayPress}
              markedDates={markedDates}
              monthFormat={'MMMM'} // Para mostrar apenas o nome do mês no cabeçalho do calendário
              onMonthChange={(month) => {
                setCurrentCalendarMonth(month.dateString.slice(0, 7));
              }}
              theme={{
                backgroundColor: '#FFEEDB',
                calendarBackground: '#FFFFFF',
                textSectionTitleColor: '#555555', // Cor dos nomes dos dias (DOM, SEG...)
                selectedDayBackgroundColor: '#007AFF', // Azul da imagem
                selectedDayTextColor: '#FFFFFF',
                todayTextColor: '#007AFF',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                arrowColor: '#007AFF', // Cor das setas de navegação do mês
                monthTextColor: '#2d4150', // Cor do texto do mês/ano
                indicatorColor: 'blue',
                textDayFontFamily: 'System',
                textMonthFontFamily: 'System',
                textDayHeaderFontFamily: 'System',
                textDayFontWeight: '400',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '600',
                textDayFontSize: 16,
                textMonthFontSize: 20, // Tamanho do texto do mês (ex: Fevereiro)
                textDayHeaderFontSize: 13, // Tamanho do DOM, SEG, TER
              }}
              style={styles.calendar}
            />
          </View>
        ) : (
          <View style={styles.timeSlotViewContainer}>
            <Text style={styles.timeSlotTitle}>Qual horário é melhor?</Text>
            <Text style={styles.selectedDateDisplay}>
              {formatDateForDisplay(selectedDate)}
            </Text>
            {availableTimes.length > 0 ? (
              <View style={styles.timeSlotsGrid}>
                {availableTimes.map((time, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.timeButton,
                      selectedTime === time && styles.selectedTimeButton,
                    ]}
                    onPress={() => handleTimePress(time)}>
                    <Text
                      style={[
                        styles.timeButtonText,
                        selectedTime === time && styles.selectedTimeButtonText,
                      ]}>
                      {time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <Text style={styles.noTimesText}>Nenhum horário disponível para esta data.</Text>
            )}

            <View style={styles.clinicHelpContainer}>
              <Text style={styles.clinicHelpText}>
                Não sabe qual atendimento precisa? Não se preocupe! Clique no link abaixo e fale diretamente com nossa equipe. Vamos te ajudar a encontrar o melhor tratamento para o seu sorriso!
              </Text>
              <TouchableOpacity style={styles.clinicHelpButton}>
                <Text style={styles.clinicHelpButtonText}>Fale com a clínica</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFEEDB', // Um cinza bem claro para o fundo geral
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 15 : 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerButton: {
    padding: 8,
    minWidth: 40, // Garante espaço para o botão de voltar ou para o espaçador
    alignItems: 'center',
  },
  headerIconText: {
    fontSize: Platform.OS === 'ios' ? 26 : 24, // Ajuste para '‹' parecer bom
    color: '#007AFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  headerIconsRight: {
    flexDirection: 'row',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Espaço para não colar na nav bar
  },
  calendarViewContainer: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 8,
    paddingBottom: 10, // Espaço interno
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  calendar: {
    // Estilos específicos do calendário, se necessário além do theme
    // Por exemplo, borderRadius para o container interno do calendário
    borderRadius: 8,
  },
  timeSlotViewContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  timeSlotTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333333',
  },
  selectedDateDisplay: {
    fontSize: 15,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 20,
  },
  timeSlotsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Ou 'flex-start' se preferir alinhamento à esquerda
  },
  timeButton: {
    backgroundColor: '#F0F0F0', // Cinza claro para horários disponíveis
    paddingVertical: 12,
    paddingHorizontal: 5, // Ajuste para caber 3 por linha
    borderRadius: 8,
    margin: 6, // Margem entre os botões
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    minWidth: '28%', // Para tentar encaixar 3 botões por linha
    maxWidth: '30%',
  },
  selectedTimeButton: {
    backgroundColor: '#007AFF', // Azul para horário selecionado
    borderColor: '#0056b3',
  },
  timeButtonText: {
    fontSize: 16,
    color: '#007AFF', // Texto azul para horários
    fontWeight: '500',
  },
  selectedTimeButtonText: {
    color: '#FFFFFF', // Texto branco para horário selecionado
  },
  noTimesText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777777',
    marginTop: 30,
    marginBottom: 30,
  },
  clinicHelpContainer: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  clinicHelpText: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 20,
  },
  clinicHelpButton: {
    backgroundColor: '#28a745', // Verde
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  clinicHelpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10, // SafeArea para iPhone X+
  },
  navItem: {
    alignItems: 'center',
    padding: 5,
  },
  navIcon: {
    fontSize: 24,
    color: '#888888', // Cor para ícones inativos
  },
  navIconActive: {
    color: '#007AFF', // Cor para ícone ativo
  }
});

export default SchedulingScreen;