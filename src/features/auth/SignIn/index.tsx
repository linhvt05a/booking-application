import {Formik} from 'formik';
import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as yup from 'yup';
import {ListSocialButton} from '../../../components';
import {COLORS, SIZES} from '../../../constants';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthenticationStackParamList} from '../../../navigations/types';
type Props = NativeStackScreenProps<AuthenticationStackParamList, 'Register'>;

const loginValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      'Số điện thoại chưa đúng định dạng',
    )
    .required('Vui lòng nhập số điện thoại'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Mật khẩu phải chứa ít nhất 1 chữ cái từ (a-z)')
    .matches(/\w*[A-Z]\w*/, 'Mật khẩu phải chứa ít nhất 1 chữ cái in hoa (A-Z)')
    .matches(/\d/, 'Mật khẩu phải chứa ít nhất 1 chữ số (0-9)')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (!@#$%^&*)',
    )
    .min(8, ({min}) => `Mật khẩu phải có ít nhất ${min} ký tự`)
    .required('Vui lòng nhập mật khẩu'),
});
export interface LoginForm {
  phone: string;
  password: string;
}
const Login = ({navigation}: Props) => {
  const navigateToRegisterScreens = () => {
    navigation.navigate('Register');
  };
  const navigateToHome = (values: LoginForm) => {
    if (values.phone === '0869060808' && values.password === 'Linh123!@#') {
      navigation.navigate('RootApp');
    } else {
      Alert.alert(
        'Đăng nhập thất bại',
        'Số điện thoại hoặc mật khẩu chưa đúng.Vui lòng thử lại',
        [{text: 'OK', onPress: () => console.log('fsdfsdfs')}],
      );
    }
  };
  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{phone: '', password: ''}}
          onSubmit={(values: LoginForm) => navigateToHome(values)}>
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
                placeholder="Nhập số điện thoại đã đăng ký"
                style={[
                  styles.viewInput,
                  errors.phone ? styles.errorsInput : null,
                ]}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                keyboardType="phone-pad"
                placeholderTextColor={COLORS.gray}
              />
              {errors.phone && (
                <Text style={styles.errorsText}>{errors.phone}</Text>
              )}
              <TextInput
                placeholder="Nhập mật khẩu"
                style={[
                  styles.viewInput,
                  errors.password ? styles.errorsInput : null,
                ]}
                placeholderTextColor={COLORS.gray}
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
                <Text style={styles.txtLogin}>Đăng nhập</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={navigateToForgotPassword}>
          <Text style={styles.txtForgot}>Bạn quên mật khẩu?</Text>
        </TouchableOpacity>
        <View style={styles.viewText}>
          <Text style={styles.txtLoginWith}>hoặc sử dụng</Text>
        </View>
        <ListSocialButton />
        <View style={styles.viewAccount}>
          <Text style={styles.txtDontAcc}>Chưa có tài khoản?</Text>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={navigateToRegisterScreens}>
            <Text style={styles.txtRegis}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.blue,
    marginVertical: 60,
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
    color: COLORS.black,
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
  txtDontAcc: {
    color: COLORS.black,
  },
});
