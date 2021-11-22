/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import Home from './src/screens/HomeScreen/Home';
import SearchResult from './src/screens/SearchResultScreen/SearchResult';
import Search from './src/screens/SearchScreen/Search';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SearchResult />
    </>
  );
};

export default App;
