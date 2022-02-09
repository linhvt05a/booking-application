import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../../constants';

const ListSocialButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnSocial}>
        <Ionicons name="logo-facebook" size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSocial}>
        <Ionicons name="logo-google" size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSocial}>
        <Ionicons name="logo-apple" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default ListSocialButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    marginLeft: 20,
  },
  btnSocial: {
    height: SIZES.width / 10,
    width: SIZES.width / 10,
    backgroundColor: COLORS.blue,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    shadowColor: COLORS.black,
    padding: 10,
  },
});