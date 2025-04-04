import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


const TelaCadastro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.string}>Nome</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.string}>Email</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.string}>Senha</Text>
      <TextInput style={styles.input}></TextInput>
      <Button type='solid' title={"Cadastrar"} buttonStyle={styles.button} onPress={() => alert('Você foi cadastrado!')}></Button>
      <Button type='solid' title={"Voltar para Login"} buttonStyle={styles.button} onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 30,
    width: 200,
  },

  string: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15
  },

  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#2F4F4F',
    borderRadius: 10,
    padding: 10,
    marginTop: 20
  }
});

export default TelaCadastro;
