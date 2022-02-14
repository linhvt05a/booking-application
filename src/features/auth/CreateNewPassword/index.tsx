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
    .matches(/\w*[a-z]\w*/, 'Mật khẩu phải chứa ít nhất 1 chữ cái từ (a-z)')
    .matches(/\w*[A-Z]\w*/, 'Mật khẩu phải chứa ít nhất 1 chữ cái in hoa (A-Z)')
    .matches(/\d/, 'Mật khẩu phải chứa ít nhất 1 chữ số (0-9)')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (!@#$%^&*,...)',
    )
    .min(8, ({min}) => `Mật khẩu phải có ít nhất ${min} ký tự`)
    .required('Vui lòng nhập mật khẩu'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Mật khẩu nhập vào không khớp')
    .required('Vui lòng xác nhận lại mật khẩu'),
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
    Alert.alert(
      'Tạo mật khẩu',
      'Mật khẩu của bạn đã được tạo thành công.Vui lòng đăng nhập để sử dụng',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('Login')},
      ],
    );
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
                placeholder="Nhập mật khẩu"
                style={[
                  styles.viewInput,
                  errors.password ? styles.errorsInput : null,
                ]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                placeholderTextColor={COLORS.gray}
              />
              {errors.password && (
                <Text style={styles.errorsText}>{errors.password}</Text>
              )}
              <TextInput
                placeholder="Xác nhận mật khẩu"
                style={[
                  styles.viewInput,
                  errors.confirmPassword ? styles.errorsInput : null,
                ]}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
                placeholderTextColor={COLORS.gray}
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
  errorsText: {
    fontSize: SIZES.h4,
    color: COLORS.red,
  },
  errorsInput: {
    borderWidth: 1,
    borderColor: COLORS.red,
  },
});
