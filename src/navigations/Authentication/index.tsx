import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ConfirmOTP from '../../features/auth/ConfirmOTP';
import CreateNewPassword from '../../features/auth/CreateNewPassword';
import ForgotPassword from '../../features/auth/ForgotPassword';
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
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen
        options={{headerTitle: 'Lấy lại mật khẩu'}}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthStack.Screen
        options={{headerTitle: 'Lấy lại mật khẩu'}}
        name="ConfirmOTP"
        component={ConfirmOTP}
      />
      <AuthStack.Screen
        options={{headerTitle: 'Tạo mật khẩu mới'}}
        name="CreateNewPassword"
        component={CreateNewPassword}
      />
    </AuthStack.Navigator>
  );
};

export default Authentication;
