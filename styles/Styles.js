import { StyleSheet } from "react-native";
import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";


const stylesLight = StyleSheet.create({
    ...MD3LightTheme,
    container: {
      flex: 1,
      justifyContent: 'center',
      margin:10
    },
      radioButton: {
        flexDirection:'row',
        alignItems:'center'
      },
      title: {

      },
      textInput: {
      }
})

const stylesDark = StyleSheet.create({
  ...MD3DarkTheme,
  container: {
    flex: 1,
    justifyContent: 'center',
    margin:10
  },
    radioButton: {
      flexDirection:'row',
      alignItems:'center'
    },
    title: {

    },
    textInput: {
    }
});
;

export { stylesLight, stylesDark }