import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const FriendItem = ({ friend, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.info}>
        <Text style={styles.name}>{friend.fullName}</Text>
        <Text style={styles.major}>{friend.major}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#3572EF',
    borderRadius: 5,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  major: {
    fontSize: 16,
    color: '#fff',
  },
});

export default FriendItem;
