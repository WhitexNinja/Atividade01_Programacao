import { StatusBar } from 'expo-status-bar';
import { Button, Avatar } from 'react-native-elements';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.string}>Eliel Peixoto Teófilo de Jesus</Text>
      <StatusBar style="auto" />

      <Avatar
        rounded
        source={{
          uri:
            ''
        }}/>
      <Text>Email</Text>
      <TextInput></TextInput>
      <Text>Senha</Text>
      <TextInput></TextInput>
      <Button type='solid'>Logar</Button>
      <Button type='solid'>Cadastre-se</Button>
      <Text>Esqueceu a senha?</Text>
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
