import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './assets/styles/appStyles';
import Home from './components/Home';

export default function App() {
  return (
    <View style={styles.cont}>
<Home></Home>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    paddingTop: '5%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
});
