// App.js
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

const PROFILES = [
  {
    id: '1',
    name: 'Arda Adar',
    title: 'Computer Engineering Student',
    bio: 'React Native öğreniyorum. Girişim, yapay zeka ve kahve üçlüsüyle ilerliyorum.',
    avatarUri: 'https://i.pravatar.cc/300?img=12',
  },
  {
    id: '2',
    name: 'Berk D.',
    title: 'Frontend Developer',
    bio: 'JS/TS seviyorum. Boş zamanlarda UI denemeleri yaparım.',
    avatarUri: 'https://i.pravatar.cc/300?img=32',
  },
  {
    id: '3',
    name: 'Aysun S.',
    title: 'Mobile Enthusiast',
    bio: 'Mobil performans ve basit tasarım meraklısı.',
    avatarUri: 'https://i.pravatar.cc/300?img=45',
  },
];

export default function App() {
  const renderItem = ({ item }) => (
    <ProfileCard
      name={item.name}
      title={item.title}
      bio={item.bio}
      avatarUri={item.avatarUri}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.heading}>My Profile App</Text>

        <FlatList
          data={PROFILES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  inner: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 24,
  },
});
