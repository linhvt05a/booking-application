import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../constants';

export interface ConfirmOTPProps {
  navigation: any;
}
const ConfirmOTP = ({navigation}: ConfirmOTPProps) => {
  const navigateToCreateNewPassword = () => {
    navigation.navigate('CreateNewPassword');
  };
  return (
    <View style={styles.container}>
      <Text>Bạn hãy nhập mã OTP được gửi đến số điện thoại: </Text>
      <View style={styles.viewPhone}>
        <Text style={styles.txtPhone}>0869060808</Text>
        <TouchableOpacity>
          <Text style={styles.txtChangePhone}>Đổi số khác</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={navigateToCreateNewPassword}>
        <Text>Tiếp tục</Text>
      </TouchableOpacity>
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
});
