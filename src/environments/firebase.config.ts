import { AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyAya3ATZoKAyZF24Ar31vyBi_IbDgKa5Zc',
  authDomain: 'final-project-2b795.firebaseapp.com',
  databaseURL: 'https://final-project-2b795.firebaseio.com',
  storageBucket: 'final-project-2b795.appspot.com',
  messagingSenderId: '426272456136'
};

export const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};
