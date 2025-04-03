import React from 'react';
import { Button } from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

const TelaEsqSenha = ({navigation}) => {
    return (
        <View>
            <Text>Essa é a Tela de EsqueciSenha</Text>
            <Button type='solid' title={"Voltar para Login"} buttonStyle={styles.button} onPress={() => navigation.navigate('Login')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2F4F4F',
        borderRadius: 10
    }
})

export default TelaEsqSenha;