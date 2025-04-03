import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaLogin from './screens/TelaLogin';
import TelaCadastro from './screens/TelaCadastro';
import TelaEsqSenha from './screens/TelaEsqSenha';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={TelaLogin} options={{title: 'Login'}}/>
        <Stack.Screen name="Cadastro" component={TelaCadastro}  options={{title: 'Cadastro'}}/>
        <Stack.Screen name="EsqueciSenha" component={TelaEsqSenha} options={{title: 'Esqueci a Senha'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
