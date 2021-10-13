import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {DrawerComponent} from './navigations/DrawerComponent';

const App: () => Node = () => {

  return (
    <View>
      <DrawerComponent/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
