import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const languages = ['English', 'हिंदी', 'తెలుగు', 'मराठी', 'ગુજરાતી'];

const featuredSchemes = [
  {
    id: '1',
    title: 'PM Kisan Samman Nidhi',
    description: 'Direct income support for farmers',
    image: 'https://images.unsplash.com/photo-1595344416560-a055fed3bf31?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Ayushman Bharat',
    description: 'Healthcare coverage for families',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'PM Awas Yojana',
    description: 'Housing for all initiative',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=400&auto=format&fit=crop',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.title}>Government Schemes Portal</Text>
      </View>

      <View style={styles.languageContainer}>
        <Text style={styles.sectionTitle}>Select Language</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.languageScroll}>
          {languages.map((lang) => (
            <TouchableOpacity key={lang} style={styles.languageButton}>
              <Text style={styles.languageText}>{lang}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.featuredContainer}>
        <Text style={styles.sectionTitle}>Featured Schemes</Text>
        {featuredSchemes.map((scheme) => (
          <Link key={scheme.id} href={`/scheme/${scheme.id}`} asChild>
            <TouchableOpacity style={styles.schemeCard}>
              <Image source={{ uri: scheme.image }} style={styles.schemeImage} />
              <View style={styles.schemeContent}>
                <Text style={styles.schemeTitle}>{scheme.title}</Text>
                <Text style={styles.schemeDescription}>{scheme.description}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      <View style={styles.quickLinks}>
        <Text style={styles.sectionTitle}>Quick Links</Text>
        <View style={styles.linkGrid}>
          <Link href="/employment" asChild>
            <TouchableOpacity style={styles.quickLink}>
              <Text style={styles.quickLinkText}>Find Jobs</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/education" asChild>
            <TouchableOpacity style={styles.quickLink}>
              <Text style={styles.quickLinkText}>Education</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/healthcare" asChild>
            <TouchableOpacity style={styles.quickLink}>
              <Text style={styles.quickLinkText}>Healthcare</Text>
            </TouchableOpacity>
          </Link>
        </View>
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
  welcomeText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#ffffff',
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    color: '#ffffff',
    marginTop: 4,
  },
  languageContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    marginBottom: 12,
    color: '#333333',
  },
  languageScroll: {
    flexDirection: 'row',
  },
  languageButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  languageText: {
    fontFamily: 'Poppins_400Regular',
    color: '#333333',
  },
  featuredContainer: {
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
    fontSize: 16,
    marginBottom: 4,
    color: '#333333',
  },
  schemeDescription: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#666666',
  },
  quickLinks: {
    padding: 20,
  },
  linkGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickLink: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
  },
  quickLinkText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#ffffff',
    fontSize: 14,
  },
});
