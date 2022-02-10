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
} from 'react-native';
import * as yup from 'yup';
import {COLORS, SIZES} from '../../../constants';

const loginValidationSchema = yup.object().shape({
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});
export interface CreateNewPasswordProps {
  navigation: any;
}
export interface CreatePasswordForm {
  password: string;
  confirmPassword: string;
}
const CreateNewPassword = ({navigation}: CreateNewPasswordProps) => {
  const navigateToLogin = (values: CreatePasswordForm) => {
    Alert.alert('Tạo mật khẩu thành công. Vui lòng đăng nhập để sử dụng');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{confirmPassword: '', password: ''}}
          onSubmit={(values: CreatePasswordForm) => navigateToLogin(values)}>
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
                placeholder="Mật khẩu ít nhất 8 ký tự "
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
              <TextInput
                placeholder=" Nhập lại mật khẩu mới"
                style={[
                  styles.viewInput,
                  errors.confirmPassword ? styles.errorsInput : null,
                ]}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
              />
              {errors.confirmPassword && (
                <Text style={styles.errorsText}>{errors.confirmPassword}</Text>
              )}
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text style={styles.txtLogin}>Tạo mật khẩu mới</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  errorsText: {
    fontSize: SIZES.h4,
    color: COLORS.red,
  },
  errorsInput: {
    borderWidth: 1,
    borderColor: COLORS.red,
  },
});
