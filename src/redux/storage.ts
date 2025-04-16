// storage.ts
import { WebStorage } from 'redux-persist';


const isServer = typeof window === 'undefined';

const createNoopStorage = (): WebStorage => {
    return {
      getItem(_key) {
        return Promise.resolve(null);
      },
      setItem(_key, _value) {
        return Promise.resolve();
      },
      removeItem(_key) {
        return Promise.resolve();
      },
    };
  };
  

const storage = !isServer
  ? require('redux-persist/lib/storage').default
  : createNoopStorage();

export default storage;
