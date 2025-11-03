// components/ProfileCard.js
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProfileCard({
  name = 'Ada Lovelace',
  title = 'Software Engineer',
  bio = 'Matematik, algoritmalar ve kahve. Mobilde minimal tasarım sever.',
  avatarUri = 'https://i.pravatar.cc/300'
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatarUri }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    // iOS gölge
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    // Android gölge
    elevation: 4,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    marginRight: 16,
  },
  info: {
    flex: 1,
    gap: 6, // RN 0.71+ için hoş bir kısayol (eski sürümde kaldırın)
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  bio: {
    fontSize: 13,
    color: '#374151',
    lineHeight: 18,
    marginTop: 4,
  },
});
