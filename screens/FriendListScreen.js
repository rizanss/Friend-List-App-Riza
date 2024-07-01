// screens/FriendListScreen.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FriendItem from '../components/FriendItem';

const friends = [
  { id: '1', name: 'Difa', fullName: 'Difa Rofi Alqudsi', major: 'Computer Science', description: 'Teman sekelas yang banyak uang dan baik hati'},
  { id: '2', name: 'Akhsan', fullName: 'M Akhsan Nurramdhan', major: 'Computer Science', description: 'Teman yang cerdas dalam mendapatkan dan mengolah informasi' },
  { id: '3', name: 'Verdi', fullName: 'Verdi Eza Irawan', major: 'Informatics Engineering', description: 'Teman yang lucu dan kocak, cocok untuk menjadi moodbooster' },
  { id: '4', name: 'Rafli', fullName: 'Rafli Dwi Praja', major: 'Political Science', description: 'Teman yang suka bikin obrolan jadi plesetan' },
  { id: '5', name: 'Nanda', fullName: 'Nanda Sidiq Nugraha', major: 'Business Administration', description: 'Teman yang membawa kepada kesehatan, selalu mengajak olahraga' },
  // Tambahkan data teman lainnya di sini
];

const FriendListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <FriendItem
      friend={item}
      onPress={() => navigation.navigate('FriendDetail', { friend: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default FriendListScreen;
