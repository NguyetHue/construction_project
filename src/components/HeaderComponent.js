import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, Image, TouchableHighlight,StyleSheet,TouchableOpacity
} from 'react-native';

export default class HeaderComponent extends React.Component {
  render() {
   
    return (
      <View style={styles.container}
      >
        <TouchableHighlight
          style={{ marginLeft: 10, marginTop: 10 }}
          onPress={() => this.props.navigation.openDrawer()}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../images/menu_icon_b.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      height: 40,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
    },
  });