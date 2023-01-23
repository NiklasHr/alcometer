import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from "react";
import Styles from './styles/Styles.js';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [result, setResult] = useState('');
  /*const [gender, setGender] = useState("mies");*/

  function calculate() {
    /* let result = 0; */
    let liters = bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;

    if (hours >= 0 && bottles >= 0 && weight >=0) {
      setResult((grams - (burning * hours)) / (weight * 0.7));
    } else if (gender === "nainen" && hours >= 0 && bottles >= 0 && weight >=0) {
      setResult((grams - (burning * hours)) / (weight * 0.6));
    } else {
      setResult(0);
    }
  }

  return (
    <View style={Styles.container}>
      <Text>Alcometer</Text>

      <Text>Weight</Text>
      <TextInput
        style={{borderWidth:1, width:200}}
        onChangeText={(t) => setWeight(t)}
      />

    <Text>Bottles</Text>
    <View style={Styles.fixToText}>
      <Button title='-' onPress={() => setBottles(Number(bottles) - 1)} />
        <Text>{bottles}</Text>
      <Text/>
      <Button title='+' onPress={() => setBottles(Number(bottles) + 1)} />
    </View>
      
      
    <Text>Hours</Text>
    <View style={Styles.fixToText}>
      <Button title='-' onPress={() => setHours(hours - 1)} />
        <Text>{hours}</Text>
      <Text/>
      <Button title='+' onPress={() => setHours(hours + 1)} />
    </View>

      <Text>Male</Text>
      <Text>Female</Text>

      <Button title='calculate male' onPress={calculate}/>
      <Text>{result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
