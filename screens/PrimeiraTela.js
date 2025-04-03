import { Button, Avatar, Input } from 'react-native-elements';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const PrimeiraTela = ({navigation}) => {
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
              <Text><br></br></Text>
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
              <Text><br></br></Text>
              <Button type='solid' title={"Logar"} buttonStyle={styles.button}></Button>
              <Text><br></br></Text>
              <Button type='solid' title={"Cadastre-se"} buttonStyle={styles.button} onPress={()=>navigation.navigate('Cadastro')}></Button>
              <Text><br></br></Text>
              <Text style={styles.string}>Esqueceu a senha?</Text>
            </View>
    );
};

export default PrimeiraTela;

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