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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { layouts } from './src/constant/CommonLayout';
import { texts } from './src/constant/CommonText';
import { windowHeight, windowWidth } from './src/constant/DeviceInfo';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={[layouts.centerRow, { width: windowWidth, height: windowHeight }]}>
          <Text style={texts.normalBold}>Welcome to Engrisk</Text>
        </View>
      </SafeAreaView>
    )
  }
}