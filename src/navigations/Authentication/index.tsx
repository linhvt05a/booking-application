import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConfirmOTP from '@src/features/auth/ConfirmOTP';
import CreateNewPassword from '@src/features/auth/CreateNewPassword';
import ForgotPassword from '@src/features/auth/ForgotPassword';
import Login from '@src/features/auth/SignIn';
import Register from '@src/features/auth/SignUp';
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
