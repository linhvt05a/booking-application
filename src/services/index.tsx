import axios from 'axios';
import Config from 'react-native-config';

const axiosConfig = axios.create({
  baseURL: Config.ENV_ENPOINT_DEV,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default axiosConfig;
