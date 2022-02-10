import {Formik} from 'formik';
import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ListSocialButton} from '../../../components';
import {COLORS, SIZES} from '../../../constants';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
export interface LoginProps {
  navigation: any;
}
export interface LoginForm {
  email: string;
  password: string;
}
const Register = ({navigation}: LoginProps) => {
  const navigateToRegisterScreens = () => {
    navigation.navigate('Login');
  };
  const navigateToLogin = (values: LoginForm) => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={(values: LoginForm) => navigateToLogin(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <TextInput
                placeholder="Vui lòng nhập email hoặc SĐT"
                style={[
                  styles.viewInput,
                  errors.email ? styles.errorsInput : null,
                ]}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && (
                <Text style={styles.errorsText}>{errors.email}</Text>
              )}
              <TextInput
                placeholder="Vui lòng nhập password"
                style={[
                  styles.viewInput,
                  errors.password ? styles.errorsInput : null,
                ]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && (
                <Text style={styles.errorsText}>{errors.password}</Text>
              )}
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text style={styles.txtLogin}>Đăng ký</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.txtForgot}>
            Bằng việc Đăng ký, bạn đã đồng ý với Điều khoản sử dụng của Chợ tốt
          </Text>
        </TouchableOpacity>
        <View style={styles.viewText}>
          <Text style={styles.txtLoginWith}>hoặc sử dụng</Text>
        </View>
        <ListSocialButton />
        <View style={styles.viewAccount}>
          <Text>Bạn đã có tài khoản?</Text>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={navigateToRegisterScreens}>
            <Text style={styles.txtRegis}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
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
  errorsText: {
    fontSize: SIZES.h4,
    color: COLORS.red,
  },
  errorsInput: {
    borderWidth: 1,
    borderColor: COLORS.red,
  },
});
