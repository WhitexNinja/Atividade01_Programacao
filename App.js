import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.string}>Eliel Peixoto Teófilo de Jesus</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  string: {
    color: 'white',
    border: '5px solid darkblue',
    fontFamily: 'Times New Roman',
    fontSize: 40,
    fontWeight: 'bold',
  }
});
