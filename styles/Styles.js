import { StyleSheet } from "react-native";
import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";


const stylesLight = StyleSheet.create({
    ...MD3LightTheme,
    "colors": {
      ...MD3LightTheme.colors,
      "secondary": "rgb(209, 166, 214)"
    },
    heading: {
      fontSize:40,
      alignSelf:"center",
      fontFamily:'Fjalla'
    },
    label: {
      fontSize:23
    },
    text: {
      fontSize:20
    },
    container: {
      flex: 1,
      padding:10,
      backgroundColor:'white'
    },
      radioButton: {
        flexDirection:'row',
        alignItems:'center'
      },
      numInput: {
        color:'black'
      },
      textInput: {
        backgroundColor:'white'
      },
      button: {
        borderRadius:10,
        margin:5,
        color:'black'
      },

      //Colors for results
      red: {
        color:'red'
      },
      yellow: {
        color:'orange'
      },
      green: {
        color:'green'
      }
})

const stylesDark = StyleSheet.create({
  ...MD3DarkTheme,
  "colors": {
    ...MD3DarkTheme.colors,
  },
  heading: {
    fontSize:40,
    alignSelf:"center",
    fontFamily:'Fjalla'
  },
  label: {
    fontSize:23
  },
  text: {
    fontSize:20
  },
  container: {
    flex: 1,
    padding:10,
    backgroundColor:'black',
  },
    radioButton: {
      flexDirection:'row',
      alignItems:'center',
    },
    numInput: {
      backgroundColor:'rgb(30, 26, 29)',
      color:'white'
    },
    button: {
      borderRadius:10,
      margin:5
    },

    //Colors for results
    red: {
      color:'red'
    },
    yellow: {
      color:'orange'
    },
    green: {
      color:'green'
    }
});
;

export { stylesLight, stylesDark }