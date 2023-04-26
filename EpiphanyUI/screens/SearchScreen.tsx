import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default SearchScreen;