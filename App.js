import { StyleSheet, View, Switch, StatusBar, ScrollView, Alert } from 'react-native';
import { useState } from "react";
import { Provider, RadioButton, Button, TextInput, Text } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';
import {stylesLight, stylesDark} from './styles/Styles.js';
import { useFonts } from 'expo-font';

//  App tested on android device. 

export default function App() {

  // Calculation
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [result, setResult] = useState(0);
  // Radiobutton
  const [radioVal, setRadioVal] = useState('Male');
  // Statusbar
  const [sbColor, setSbcolor] = useState('white');
  const [sbContent, setSbcontent] = useState('dark-content');
  // Switch
  const [on, setOn] = useState(false);
  const toggleSwitch = () => setOn(previousState => !previousState);
  // Theme
  const [myTheme, setMyTheme] = useState(stylesLight);

  const radioButtons = [
    {val: 'Male'},
    {val: 'Female'}
  ];

  const [loaded] = useFonts({
    Fjalla: require('./assets/fonts/FjallaOne-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider theme={myTheme}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={myTheme.container}>
          <Switch
          onValueChange={toggleSwitch}
          onChange={themeChange}
          value={on}
          thumbColor={myTheme.colors.primary}
          trackColor={{false:'grey', true:'rgb(255, 232, 252)'}}
          />
          <Text style={myTheme.heading}>Alcometer</Text>

          <TextInput 
            mode='outlined' 
            label='Weight' 
            style={myTheme.textInput} 
            keyboardType='numeric'
            onChangeText={(w) => setWeight(w)}
          />

          <Text style={myTheme.label}>Bottles</Text>
            <View style={myTheme.textInput}>
              <NumericInput onChange={(b) => setBottles(b)}
                minValue={0}
                maxValue={100}
                rounded={true}
                containerStyle={myTheme.numInput}
                textColor={myTheme.numInput.color}
                rightButtonBackgroundColor={myTheme.colors.secondary}
                leftButtonBackgroundColor={myTheme.colors.secondary}
                borderColor={myTheme.colors.secondary}
              />
          </View>
            
          <Text style={myTheme.label}>Hours</Text>
            <View style={myTheme.textInput}>
            <NumericInput onChange={(h) => setHours(h)}
              minValue={0}
              maxValue={100}
              rounded={true}
              containerStyle={myTheme.numInput}
              textColor={myTheme.numInput.color}
              rightButtonBackgroundColor={myTheme.colors.secondary}
              leftButtonBackgroundColor={myTheme.colors.secondary}
              borderColor={myTheme.colors.secondary}
            />
          </View>

          <RadioButton.Group onValueChange={newVal => setRadioVal(newVal)} value={radioVal}>
            {radioButtons.map(radioButtons => 
              <View style={myTheme.radioButton} key={radioButtons.val}>
                <RadioButton value={radioButtons.val}/>
                <Text style={myTheme.text}>{radioButtons.val}</Text>
              </View>
            )}
          </RadioButton.Group>

          <Button 
            mode='contained' 
            style={myTheme.button} 
            onPress={calculate}
          >Calculate</Button>

          <Text style={
            result < 0.08 ? [myTheme.heading, myTheme.green] : 
            result < 0.4 ? [myTheme.heading, myTheme.yellow] : [myTheme.heading, myTheme.red]
            }>Results:</Text>
          <Text style={myTheme.heading}>{result}</Text>

          <StatusBar backgroundColor={sbColor} barStyle={sbContent} />
        </View>
      </ScrollView>
    </Provider>
  );


  //functions
  
  function calculate() {
    let liters = bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;
    let firstResult = 0;

    //  Calculating result
    if (radioVal === "Male" && hours >= 0 && bottles >= 0 && weight >=0) {
      firstResult=((grams - (burning * hours)) / (weight * 0.7));
    } else if (radioVal === "Female" && hours >= 0 && bottles >= 0 && weight >=0) {
      firstResult=((grams - (burning * hours)) / (weight * 0.6));
    } else {
      firstResult=(0);
    }

    //  Setting result with separate else if function to avoid negative values + Alert for invalid weight value
    if (weight <= 0 || weight === NaN) {
      Alert.alert('Alert','Weight text field has invalid value!');
      setResult(0);
    } else if (firstResult >= 0) {
      setResult(Math.round(firstResult * 100) / 100);
      
    } else {
      setResult(0);
    }
  }


  //  Changes theme, react-native-paper seemingly doesn't have status bar options so I used react-native's component.
  function themeChange() {
    on == false ? 
    setMyTheme(stylesDark) & setSbcolor('black') & setSbcontent('light-content'): 
    setMyTheme(stylesLight) & setSbcolor('white') & setSbcontent('dark-content');
  }
}
