// screens/FriendDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const FriendDetailScreen = ({ route }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{friend.fullName}</Text>
      <Text style={styles.major}>{friend.major}</Text>
      <Text style={styles.description}>{friend.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  major: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FriendDetailScreen;
