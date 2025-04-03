import { Button, Avatar, Input } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const TelaLogin = ({navigation}) => {
    return (
        <View style={styles.container}>
              <StatusBar style="auto" />
        
              <Avatar
                size="xlarge"
                rounded
                source={{
                  uri:
                    'https://avatars.githubusercontent.com/u/152277272?s=400&u=c2db24400bb47417a550ac75630c57dc4e292f26&v=4'
                }}/>
              <Text>{"\n"}</Text>
              <Text style={styles.string}>Email</Text>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  height: 30,
                  width: 200,
                }}
              ></TextInput>
              <Text style={styles.string}>Senha</Text>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  height: 30,
                  width: 200,
                }}
              ></TextInput>
              <Text>{"\n"}</Text>
              <Button type='solid' title={"Logar"} buttonStyle={styles.button} /*onPress={() => navigation.navigate('Login')}*/></Button>
              <Text>{"\n"}</Text>
              <Button type='solid' title={"Cadastre-se"} buttonStyle={styles.button} onPress={() => navigation.navigate('Cadastro')}></Button>
              <Text>{"\n"}</Text>
              <Text style={styles.string} onPress={() => navigation.navigate('EsqueciSenha')}>Esqueceu a senha?</Text>
            </View>
    );
};

export default TelaLogin;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'dodgerblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  
    string: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  
  
    button: {
      backgroundColor: '#2F4F4F',
      borderRadius: 10
    }
  });