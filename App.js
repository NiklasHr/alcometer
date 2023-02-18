import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Switch } from 'react-native';
import { useState } from "react";
import { MD3LightTheme, Provider, RadioButton, TextInput, Text } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';
import {stylesLight, stylesDark} from './styles/Styles.js';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [result, setResult] = useState('');

  const [radioVal, setRadioVal] = useState('');
  const [on, setOn] = useState(false)
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

  const radioButtons = [
    {val: 'male'},
    {val: 'female'}
  ];

  return (
    <Provider theme={stylesLight}>
      <View style={stylesLight.container}>
        <Text variant='headlineLarge'>Alcometer</Text>

        <TextInput mode='outlined' label='Weight' style={stylesLight.textInput} onChangeText={(t) => setWeight(t)}/>

        <Text>Bottles</Text>
          <View style={stylesLight.fixToText}>
            <NumericInput onChange={() => setBottles(bottles)}/>
        </View>
          
          
        <Text>Hours</Text>
          <View style={stylesLight.fixToText}>
          <NumericInput onChange={() => setHours(hours)}/>
        </View>

        <RadioButton.Group onValueChange={newVal => setRadioVal(newVal)} value={radioVal}>
          {radioButtons.map(radioButtons => 
            <View style={stylesLight.radioButton} key={radioButtons.val}>
              <RadioButton value={radioButtons.val}/>
              <Text>{radioButtons.val}</Text>
            </View>
          )}
        </RadioButton.Group>

        <Button title='Calculate' onPress={calculate}/>
        <Text>{result}</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
