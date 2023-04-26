import React from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from './screens/SplashScreen';
import SearchScreen from './screens/SearchScreen';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SplashScreen />
      <SearchScreen />
    </>
  );
}

export default App;