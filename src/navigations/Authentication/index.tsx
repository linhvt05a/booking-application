import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from 'features/auth/SignIn';
// import Register from 'features/auth/SignUp';
import React from 'react';
import Login from '../../features/auth/SignIn';
import Register from '../../features/auth/SignUp';

const AuthStack = createNativeStackNavigator();

const Authentication = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default Authentication;
