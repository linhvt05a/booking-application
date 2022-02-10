import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../constants';

export interface ForgotPasswordProps {
  navigation: any;
}
const ForgotPassword = ({navigation}: ForgotPasswordProps) => {
  const navigateToConfirmOTP = () => {
    navigation.navigate('ConfirmOTP');
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Vui lòng nhập email hoặc SĐT để lấy lại mật khẩu..."
        style={styles.viewInput}
      />
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={navigateToConfirmOTP}>
        <Text>Đồng ý</Text>
      </TouchableOpacity>
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
});
