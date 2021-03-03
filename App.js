/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <HomeScreen/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



export default App;
