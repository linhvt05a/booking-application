import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'BookingApp',
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: {veto: () => false}, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect();
