import axios from 'axios';
import {store} from '../../redux/store';
import {setAccessToken, setRefreshToken} from '../../redux/slice/auth-slice';

const rootClient = axios.create();
const publicClint = axios.create();
const baseURL = process.env.BASE_URL;

console.log(
  'running on env -->',
  process.env.NODE_ENV,
  'base url --->',
  baseURL,
);

rootClient.defaults.timeout = 8000;
publicClint.defaults.timeout = 8000;
rootClient.defaults.baseURL = baseURL;
publicClint.defaults.baseURL = baseURL;

rootClient.interceptors.request.use(
  async config => {
    const token = store.getState().auth.access_token;
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    } else {
      config.headers.Authorization = '';
    }
    return config;
  },
  error => {
    return Promise.reject(error.response.data);
  },
);

rootClient.interceptors.response.use(
  response => response.data,
  async error => {
    const {response, config: originalRequest} = error;
    const status = response ? response.status : null;
    console.log(error.message, status);
    if (error.message === 'Network Error') {
      return Promise.reject({
        message: 'Please check your internet connection and try again.',
      });
    } else if (error.message === 'Request failed with status code 502') {
      return Promise.reject({
        message:
          "We're having trouble connecting to the server. Please try again later!",
      });
    }

    if (response?.status === 401 && !originalRequest._retry) {
      console.log('--------- generating refreshToken ------');
      const oldRefreshToken = store.getState().auth.refresh_token;
      if (oldRefreshToken) {
        try {
          const res = await publicClint.post('refresh', {
            refresh_token: oldRefreshToken,
          });
          const {accessToken} = res.data;
          store.dispatch(setAccessToken(accessToken));
          rootClient.defaults.headers.common.Authorization =
            'Bearer ' + accessToken;
          console.log(
            '--------- generating refreshToken successful : got new token ------',
          );
          return rootClient(originalRequest);
        } catch (error) {
          console.log('error - refreshToken expired --->', error);
          store.dispatch(setRefreshToken(''));
          console.log('user logout.....');
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error.response.data);
  },
);
export default rootClient;
