import { AppRegistry, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';

var {height, width} = Dimensions.get('window');
let routeConfigs = {
  'Home': {
    screen: HomeScreen,
  },
  'Profile': {
    screen: ProfileScreen,
  }

};
let drawerNavigatorConfig = {
  initialRouteName: 'Home',
  drawerWidth: width / 2,
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: 'red',
  },
  order: ["Home", "Profile"],
};
export const DrawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);