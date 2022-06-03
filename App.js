/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthNavigation } from './src';
import {Colors} from './src';

const App = () => {
  return (
    <View style={styles.mainWrapper}>
    {/* <Welcome /> */}
    {/* <Home /> */}
    {/* <Detail /> */}
    <AuthNavigation />
    </View>

  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: Colors.BLACK_COLOR
  }
})

export default App;
