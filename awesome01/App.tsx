import React from 'react'
import {
  View,
  SafeAreaView,
  Text,
  useColorScheme,
  StyleSheet
} from 'react-native'
import AppPro from './AppPro'


function App() {
  const isDarkMode = useColorScheme() === 'dark'
  return <SafeAreaView style={styles.container}>
    <View>
      <Text style={isDarkMode ? styles.white : styles.black}>Hello There</Text>
      <Text style={isDarkMode ? styles.white : styles.black}>Hello There</Text>
      <Text style={isDarkMode ? styles.white : styles.black}>Hello There</Text>
      <Text style={isDarkMode ? styles.white : styles.black}>Hello There</Text>
      <AppPro></AppPro>
    </View>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  white: {
    color: "#FFFFFF"
  },
  black: {
    color: "#000000"
  }
})

export default App