import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import client from '../Providers/client';
import { CONFIG_ID } from '../configs/env';

export default function Home() {
  const [lightOffIn, setLightOffIn] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  if (isLoading) {
    findConfig().then((response) => {
      setLightOffIn(response.lightOffIn);
      setIsLoading(false);
    }).catch(exception => {
        alert(`Error: ${exception.message}`);
    });

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          padding: 10,
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (<View style={{margin: 20, marginTop: 200}}>
    <Text style={styles.title} >Sensor de Luminosidade [Valor Atual {lightOffIn}]</Text>
    <TextInput
      placeholder={` Light off in:`}
      keyboardType={'numeric'}
      onChangeText={text=>setLightOffIn(text)}
      style={{borderWidth: 2, borderColor: 'skyblue', margin: 20}}
      />

    <Button title="Atualizar" onPress={() => updateConfig(lightOffIn)} />
  </View>);
}

async function findConfig() {
  return client.findConfig(CONFIG_ID);
}

async function updateConfig(lightOffIn) {
  const number = Math.min(Math.max(Number(lightOffIn), 0), 1000);

  return client.updateConfig(CONFIG_ID, number);
}

const styles = StyleSheet.create({
  title: {
    padding: 5,
    marginBottom: 200,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
  }
});
