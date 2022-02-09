import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {ListSocialButton} from '../../../components';
import {COLORS, SIZES} from '../../../constants';

export interface LoginProps {
  navigation: any;
}
const Login = ({navigation}: LoginProps) => {
  const navigateToRegisterScreens = () => {
    navigation.navigate('Register');
  };
  const navigateToHome = () => {
    navigation.navigate('rootApp');
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <TextInput
          placeholder="Vui lòng nhập email hoặc SĐT"
          style={styles.viewInput}
        />
        <TextInput
          placeholder="Vui lòng nhập password"
          style={styles.viewInput}
        />
        <TouchableOpacity style={styles.loginButton} onPress={navigateToHome}>
          <Text style={styles.txtLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.txtForgot}>Bạn quên mật khẩu?</Text>
        </TouchableOpacity>
        <View style={styles.viewText}>
          <Text style={styles.txtLoginWith}>hoặc sử dụng</Text>
        </View>
        <ListSocialButton />
        <View style={styles.viewAccount}>
          <Text>Chưa có tài khoản?</Text>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={navigateToRegisterScreens}>
            <Text style={styles.txtRegis}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.blue,
  },
  viewInput: {
    width: SIZES.width - 32,
    height: SIZES.height / 16,
    borderWidth: 1,
    borderColor: COLORS.gray,
    fontSize: SIZES.h4,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  loginButton: {
    width: SIZES.width - 36,
    height: SIZES.width / 8,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 20,
  },
  txtLogin: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    fontWeight: '600',
  },
  forgotButton: {
    width: SIZES.width - 36,
    marginVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtForgot: {
    color: COLORS.blue,
    fontSize: SIZES.h4,
    fontWeight: '600',
  },
  txtLoginWith: {
    color: COLORS.gray,
    fontSize: SIZES.h4,
  },
  viewText: {
    alignSelf: 'center',
    marginVertical: 30,
  },
  viewAccount: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    marginVertical: 25,
  },
  btnRegister: {
    paddingHorizontal: 5,
  },
  txtRegis: {
    color: COLORS.blue,
    textDecorationLine: 'underline',
  },
});
