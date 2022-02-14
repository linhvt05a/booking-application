import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Account,
  Explore,
  Favorite,
  Home,
  Reservation,
} from '../../features/flightbooking/screens';

const Tab = createBottomTabNavigator();
const screenOptions = (
  route: RouteProp<ParamListBase, string>,
  color: string,
  focused: boolean,
  size: number,
) => {
  let iconName: string = '';

  switch (route.name) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Explore':
      iconName = focused ? 'paw' : 'paw-outline';
      break;
    case 'Reservation':
      iconName = focused ? 'calendar' : 'calendar-outline';
      break;
    case 'Favorite':
      iconName = focused ? 'heart-circle' : 'heart-circle-outline';
      break;
    case 'Account':
      iconName = focused ? 'person' : 'person-outline';
      break;
    default:
      break;
  }

  return <Ionicons name={iconName} color={color} size={size} />;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) =>
          screenOptions(route, color, focused, size),
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Reservation" component={Reservation} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
