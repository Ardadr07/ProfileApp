// App.js
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.heading}>My Profile App</Text>

        <ProfileCard
          name="Arda Adar"
          title="Computer Engineering Student"
          bio="React Native öğreniyorum. Girişim, yapay zeka ve kahve üçlüsüyle ilerliyorum."
          avatarUri="https://i.pravatar.cc/300?img=12"
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
    gap: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
});
