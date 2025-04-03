import React from 'react';
import { View, Text, Button } from 'react-native';


export default function SegundaTela(){;
const SegundaTela = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Segunda Tela</Text>
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};
}
