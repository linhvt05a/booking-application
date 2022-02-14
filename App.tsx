import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Authentication from './src/navigations/Authentication';
import TabNavigation from './src/navigations/TabNavigation';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="auth"
          component={Authentication}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RootApp"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
