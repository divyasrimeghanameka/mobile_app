import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const educationPrograms = [
  {
    id: '1',
    title: 'PM eVIDYA',
    description: 'Digital education initiative',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'SWAYAM Portal',
    description: 'Free online courses',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'National Scholarship Portal',
    description: 'Find and apply for scholarships',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop',
  },
];

export default function EducationScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Education Opportunities</Text>
        <Text style={styles.headerSubtitle}>Discover programs and scholarships</Text>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoryGrid}>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Scholarships</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Online Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Skill Training</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Career Guidance</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.programsContainer}>
        <Text style={styles.sectionTitle}>Featured Programs</Text>
        {educationPrograms.map((program) => (
          <TouchableOpacity key={program.id} style={styles.programCard}>
            <Image source={{ uri: program.image }} style={styles.programImage} />
            <View style={styles.programContent}>
              <Text style={styles.programTitle}>{program.title}</Text>
              <Text style={styles.programDescription}>{program.description}</Text>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreText}>Learn More</Text>
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
  sectionTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    marginBottom: 16,
    color: '#333333',
  },
  categoriesContainer: {
    padding: 20,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
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
  categoryTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
  },
  programsContainer: {
    padding: 20,
  },
  programCard: {
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
  programImage: {
    width: '100%',
    height: 160,
  },
  programContent: {
    padding: 16,
  },
  programTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 4,
  },
  programDescription: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  learnMoreButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  learnMoreText: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#ffffff',
    fontSize: 14,
  },
});
