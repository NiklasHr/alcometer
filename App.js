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
  const [result, setResult] = useState(0);

  const [radioVal, setRadioVal] = useState('male');
  const [on, setOn] = useState(false);

  function calculate() {
    let liters = bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;
    let firstResult = 0;

    //Calculations
    if (radioVal === "male" && hours >= 0 && bottles >= 0 && weight >=0) {
      firstResult=((grams - (burning * hours)) / (weight * 0.7));
    } else if (radioVal === "female" && hours >= 0 && bottles >= 0 && weight >=0) {
      firstResult=((grams - (burning * hours)) / (weight * 0.6));
    } else {
      firstResult=(0);
    }

    //Setting result with separate else if function to avoid negative values
    if (firstResult >= 0) {
      setResult(Math.round(firstResult * 100) / 100);
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

        <TextInput mode='outlined' label='Weight' style={stylesLight.textInput} onChangeText={(w) => setWeight(w)}/>

        <Text>Bottles</Text>
          <View style={stylesLight.fixToText}>
            <NumericInput onChange={(b) => setBottles(b)}/>
        </View>
          
        <Text>Hours</Text>
          <View style={stylesLight.fixToText}>
          <NumericInput onChange={(h) => setHours(h)}/>
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
