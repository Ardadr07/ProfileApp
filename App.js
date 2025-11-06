// App.js
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.heading}>My Profile App</Text>

        <ScrollView
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          <ProfileCard
            name="Ada Lovelace"
            role="Mathematician"
            imageSource={require('./assets/ada.png')}
          />
          <ProfileCard
            name="Grace Hopper"
            role="Computer Scientist"
            imageSource={require('./assets/grace.png')}
          />
          <ProfileCard
            name="Hedy Lamarr"
            role="Inventor"
            imageSource={require('./assets/hedy.png')}
          />
        </ScrollView>
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
    paddingBottom: 24, // listenin altına biraz boşluk
  },
});
