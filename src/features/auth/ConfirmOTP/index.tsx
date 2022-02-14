/* eslint-disable react-hooks/exhaustive-deps */
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, SIZES} from '../../../constants';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;
const RESEND_OTP_TIME_LIMIT = 60;
export interface ConfirmOTPProps {
  navigation: any;
  route: any;
}
const ConfirmOTP = ({navigation, route}: ConfirmOTPProps) => {
  console.log(route);
  const {values} = route.params;
  let resendOtpTimerInterval: any;
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
  );
  //to start resent otp option
  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };
  //on click of resend button
  const onResendOtpButtonPress = () => {
    //clear input field
    setValue('');
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    // todo
    console.log('todo: Resend OTP');
  };
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigateToCreateNewPassword = () => {
    if (value === '111111') {
      navigation.navigate('CreateNewPassword');
    } else {
      Alert.alert('Mã xác nhận không đúng.Vui lòng nhập lại');
    }
  };
  useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.txtOtp}>
        Bạn hãy nhập mã OTP được gửi đến số điện thoại:{' '}
      </Text>
      <View style={styles.viewPhone}>
        <Text style={styles.txtPhone}>{values.phone}</Text>
        <TouchableOpacity>
          <Text style={styles.txtChangePhone}>Đổi số khác</Text>
        </TouchableOpacity>
      </View>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={navigateToCreateNewPassword}
        disabled={resendButtonDisabledTime === 0 || value === ''}>
        <Text>Tiếp tục</Text>
      </TouchableOpacity>
      {/* View for resend otp  */}
      {resendButtonDisabledTime > 0 ? (
        <Text style={styles.txtResendOtp}>
          Gửi lại mã ({resendButtonDisabledTime}) giây
        </Text>
      ) : (
        <TouchableOpacity onPress={onResendOtpButtonPress}>
          <View style={styles.resendCodeContainer}>
            <Text style={styles.txtResendOtp}>Gửi lại mã</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ConfirmOTP;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  viewPhone: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  txtChangePhone: {
    fontSize: SIZES.h4,
    color: COLORS.blue,
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
  txtPhone: {
    fontSize: SIZES.h4,
    fontWeight: '600',
    color: COLORS.black,
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: SIZES.body3,
    color: COLORS.black,
    borderWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  focusCell: {
    borderColor: '#000',
  },
  resendCode: {
    color: COLORS.blue,
    marginStart: 20,
    marginTop: 40,
  },
  resendCodeText: {
    marginStart: 20,
    marginTop: 40,
  },
  resendCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtOtp: {
    color: COLORS.black,
  },
  txtResendOtp: {
    color: COLORS.gray,
  },
});
