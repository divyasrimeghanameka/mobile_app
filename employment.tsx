import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Search } from 'lucide-react-native';

const jobs = [
  {
    id: '1',
    title: 'MGNREGA Worker',
    location: 'Rural Development Department',
    type: 'Government',
    image: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Skill Development Trainee',
    location: 'PMKVY Center',
    type: 'Training',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Healthcare Worker',
    location: 'Primary Health Center',
    type: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop',
  },
];

export default function EmploymentScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#666666" />
          <Text style={styles.searchPlaceholder}>Search for jobs...</Text>
        </View>
      </View>

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>All Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filterButton, styles.filterButtonActive]}>
            <Text style={[styles.filterText, styles.filterTextActive]}>Government</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Private</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Training</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.jobsContainer}>
        {jobs.map((job) => (
          <TouchableOpacity key={job.id} style={styles.jobCard}>
            <Image source={{ uri: job.image }} style={styles.jobImage} />
            <View style={styles.jobContent}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobLocation}>{job.location}</Text>
              <View style={styles.jobType}>
                <Text style={styles.jobTypeText}>{job.type}</Text>
              </View>
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
  searchContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  searchPlaceholder: {
    fontFamily: 'Poppins_400Regular',
    color: '#666666',
    flex: 1,
  },
  filtersContainer: {
    padding: 20,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  filterButtonActive: {
    backgroundColor: '#0066cc',
  },
  filterText: {
    fontFamily: 'Poppins_400Regular',
    color: '#666666',
  },
  filterTextActive: {
    color: '#ffffff',
  },
  jobsContainer: {
    padding: 20,
  },
  jobCard: {
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
  jobImage: {
    width: '100%',
    height: 160,
  },
  jobContent: {
    padding: 16,
  },
  jobTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 4,
  },
  jobLocation: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  jobType: {
    backgroundColor: '#e6f0ff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  jobTypeText: {
    fontFamily: 'Poppins_400Regular',
    color: '#0066cc',
    fontSize: 12,
  },
});
