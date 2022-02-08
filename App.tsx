import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {COLORS, SIZES} from './src/constants';
import {fetchDataPost} from './src/features/postSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataPost());
  }, [dispatch]);
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <ScrollView></ScrollView>
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    color: COLORS.black,
    fontSize: SIZES.h2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
