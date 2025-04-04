import React from 'react';
import { Button } from 'react-native-elements';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TelaEsqSenha = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.string}>Email</Text>
          <TextInput style={styles.input}></TextInput>
          <Button type='solid' title={"Enviar"} buttonStyle={styles.button} onPress={() => alert('Mensagem enviada para o seu email. Favor verificar.')}></Button>
          <Button type='solid' title={"Voltar"} buttonStyle={styles.button} onPress={() => navigation.navigate('Login')}></Button>
        </View>
    )
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

export default TelaEsqSenha;