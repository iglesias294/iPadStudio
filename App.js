import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home.js'
import Code from './screens/code.js'
import { Router, Stack, Scene } from 'react-native-router-flux'
import { WebView } from 'react-native-webview'
const server = "http://108.31.78.46:3000"
export default function App() {
  return (
    <Router>
      <Stack
        key="root"
        hideNavBar
      >
        <Scene key="home" component={Home} />
        <Scene key="code" component={Code} title="Code" />
      </Stack>
    </Router>
  );
}
