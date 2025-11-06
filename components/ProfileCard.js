import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';


export default function ProfileCard({ name, role, imageSource }) {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 10,
    // Android gölge
    elevation: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  role: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
});
