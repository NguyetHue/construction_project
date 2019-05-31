import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Main from './src/components/Main';
import DrawerNavigator from './src/components/DrawerNavigator';


export default class loginAnimation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFE',
  },
});

AppRegistry.registerComponent('demo', () => DrawerNavigator);
AppRegistry.registerComponent('loginAnimation', () => loginAnimation);
