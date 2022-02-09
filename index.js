/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {StoreProvider} from './src/redux/store';
const RootApp = () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);
AppRegistry.registerComponent(appName, () => RootApp);
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
