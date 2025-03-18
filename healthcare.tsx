import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const healthcareSchemes = [
  {
    id: '1',
    title: 'Ayushman Bharat',
    description: 'Comprehensive healthcare coverage',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Jan Aushadhi Scheme',
    description: 'Affordable medicines',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'PM-JAY',
    description: 'Health insurance for families',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&auto=format&fit=crop',
  },
];

export default function HealthcareScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Healthcare Services</Text>
        <Text style={styles.headerSubtitle}>Access quality healthcare</Text>
      </View>

      <View style={styles.emergencyCard}>
        <Text style={styles.emergencyTitle}>Emergency Services</Text>
        <View style={styles.emergencyNumbers}>
          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.emergencyButtonText}>Ambulance: 108</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.emergencyButtonText}>Helpline: 1075</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.servicesContainer}>
        <Text style={styles.sectionTitle}>Available Services</Text>
        <View style={styles.serviceGrid}>
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Find Hospitals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Book Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Medical Records</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Insurance</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.schemesContainer}>
        <Text style={styles.sectionTitle}>Healthcare Schemes</Text>
        {healthcareSchemes.map((scheme) => (
          <TouchableOpacity key={scheme.id} style={styles.schemeCard}>
            <Image source={{ uri: scheme.image }} style={styles.schemeImage} />
            <View style={styles.schemeContent}>
              <Text style={styles.schemeTitle}>{scheme.title}</Text>
              <Text style={styles.schemeDescription}>{scheme.description}</Text>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#0066cc',
  },
  headerTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.8,
  },
  emergencyCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#ff3b30',
    borderRadius: 12,
  },
  emergencyTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 12,
  },
  emergencyNumbers: {
    flexDirection: 'row',
    gap: 12,
  },
  emergencyButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 1,
  },
  emergencyButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#ff3b30',
    fontSize: 14,
    textAlign: 'center',
  },
  sectionTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    marginBottom: 16,
    color: '#333333',
  },
  servicesContainer: {
    padding: 20,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
  },
  schemesContainer: {
    padding: 20,
  },
  schemeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  schemeImage: {
    width: '100%',
    height: 160,
  },
  schemeContent: {
    padding: 16,
  },
  schemeTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 4,
  },
  schemeDescription: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  applyButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  applyButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#ffffff',
    fontSize: 14,
  },
});
