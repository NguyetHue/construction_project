import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  TouchableHighlight,Text,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import HeaderComponent from './HeaderComponent';
import arrowImg from '../images/logout.png';

const SIZE = 40;
const backgroundColor = '#0067a7';
export default class HomeScreen extends React.Component {
  static navigationOptions={
    title:'Home',
  };
  
  constructor() {
    
    super();

    this.state = {
      isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      Actions.pop();
    }, 500);
  }
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = 'Home';
    let drawerIcon = () => (
      <Image
        source={require('../images/username.png')}
        style={{ width: 26, height: 26, tintColor: backgroundColor }}
      />
    );
    return {drawerLabel, drawerIcon};
  }
  render() {
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    return (
      <View style ={styles.container}>
      <View style={{
        flex: 1,
     
        }}>
         <HeaderComponent {...this.props} />
      </View>
      <View>
        <Text>11111111111111111111111111111</Text>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={this._onPress}
          style={styles.button}
          activeOpacity={1}>
          <Image style={styles.image} source={arrowImg} />
        </TouchableOpacity>
        <Animated.View
          style={[styles.circle, {transform: [{scale: changeScale}]}]}
        />
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  container1:{
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    marginTop: -SIZE,
    borderRadius: 100,
    backgroundColor: '#F035E0',
  },
  image: {
    width: 24,
    height: 24,
  },
});
