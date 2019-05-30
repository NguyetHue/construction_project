import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import ButtonSubmit from './ButtonSubmit';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native';

import UserInput from './UserInput';
/*import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';*/
export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPass: true,
			press: false,
		};
		this.showPass = this.showPass.bind(this);
	}

	showPass() {
		this.state.press === false
		? this.setState({showPass: false, press: true})
		: this.setState({showPass: true, press: false});
	}
	render() {
		return (
			<View style={styles.container}>
					
						<KeyboardAvoidingView behavior='padding' enabled  >
								<UserInput
										source={require('../images/username.png')}
										placeholder="Username"
										autoCapitalize={'none'}
										returnKeyType={'done'}
										autoCorrect={false}
										style={styles.inputUser}
								/>
							
								<UserInput
										source={require('../images/password.png')}
										secureTextEntry={this.state.showPass}
										placeholder="Password"
										returnKeyType={'done'}
										autoCapitalize={'none'}
										autoCorrect={false}
										style={styles.inputPass}
								/>
								<TouchableOpacity
									activeOpacity={0.7}
									style={styles.btnEye}
									onPress={this.showPass}
									autoCapitalize={'none'}
								>
									
									<Image source={require('../images/eye_black.png')} style={styles.iconEye} />
								</TouchableOpacity>
								
						</KeyboardAvoidingView>
			</View>
			);
	}
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		marginTop: 50,
	},
	inputUser:{
		
	},
	inputPass: {
	},
	btnEye: {
		//  position: 'relative',
	 	position:'absolute',
		flex: 1,
		zIndex: 999,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'baseline',
		paddingTop:83,
		right:30,
		
		
	},
	iconEye: {
		width: 25,
		height: 25,
		tintColor: 'rgba(0,0,0,0.2)',
		// resizeMode: 'contain',
	
		
	},


});
