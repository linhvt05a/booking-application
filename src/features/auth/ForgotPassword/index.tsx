import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '@src/constants';
import * as yup from 'yup';
import {Formik} from 'formik';
const loginValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      'Số điện thoại chưa đúng định dạng',
    )
    .required('Vui lòng nhập số điện thoại'),
});
export interface ForgotPasswordProps {
  navigation: any;
}
export interface ForgotPasswordForm {
  phone: string;
}
const ForgotPassword = ({navigation}: ForgotPasswordProps) => {
  const navigateToConfirmOTP = (values: ForgotPasswordForm) => {
    navigation.navigate('ConfirmOTP', {values});
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{phone: ''}}
          onSubmit={(values: ForgotPasswordForm) =>
            navigateToConfirmOTP(values)
          }>
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
                placeholder="Nhập số điện thoại để lấy lại mật khẩu"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                placeholderTextColor={COLORS.gray}
                keyboardType="phone-pad"
                style={[
                  styles.viewInput,
                  errors.phone ? styles.errorsInput : null,
                ]}
              />
              {errors.phone && (
                <Text style={styles.errorsText}>{errors.phone}</Text>
              )}
              <TouchableOpacity
                disabled={!isValid}
                style={styles.confirmButton}
                onPress={handleSubmit}>
                <Text>Đồng ý</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ForgotPassword;

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
  confirmButton: {
    width: SIZES.width - 36,
    height: SIZES.width / 8,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 20,
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
