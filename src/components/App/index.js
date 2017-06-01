import React from 'react';
import { View, Text } from 'react-native';

import colors from '../Styles/colors';

export default function App() {
  const { crimsonRed } = colors;
  return <View>
    <Text style={{ color: crimsonRed }}>Hello World!</Text>
  </View>;
}