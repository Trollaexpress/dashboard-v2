// storage.ts

import {WebStorage} from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

const isServer = typeof window === 'undefined';

const createNoopStorage = (): WebStorage => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage = isServer ? createNoopStorage() : localStorage;

export default storage;
