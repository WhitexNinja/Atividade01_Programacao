import React from 'react';
import { View, Text, Button } from 'react-native';


const TelaCadastro = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cadastro</Text>
      <Button title="Voltar para Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default TelaCadastro;
