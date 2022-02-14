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
  phone: yup
    .string()
    .matches(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      'Số điện thoại chưa đúng định dạng',
    )
    .required('Vui lòng nhập số điện thoại để đăng ký'),
});
export interface LoginProps {
  navigation: any;
}
export interface RegisterForm {
  phone: string;
}
const Register = ({navigation}: LoginProps) => {
  const navigateToRegisterScreens = () => {
    navigation.navigate('Login');
  };
  const navigateToLogin = (values: RegisterForm) => {
    navigation.navigate('ConfirmOTP', {values});
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{phone: ''}}
          onSubmit={(values: RegisterForm) => navigateToLogin(values)}>
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
                placeholder="Nhập số điện thoại để đăng ký"
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
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleSubmit}
                disabled={!isValid || values.phone === ''}>
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
          <Text style={styles.txtAcc}>Bạn đã có tài khoản?</Text>
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
  txtAcc: {
    color: COLORS.black,
  },
});
