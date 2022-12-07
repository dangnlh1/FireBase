import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyA82UEi-Xy7a4sti_GJbDio5njfsG3eMuk",
    authDomain: "vuondau-450bf.firebaseapp.com",
    projectId: "vuondau-450bf",
    storageBucket: "vuondau-450bf.appspot.com",
    messagingSenderId: "870614266903",
    appId: "1:870614266903:web:9fe0fdce407701aacb9852",
    measurementId: "G-M1X45NJNW6"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const requestToken = () => {
    return getToken(messaging, {vapidKey: 'BMAmnOkvmhnsjh38lzDrOl0ohLponII5b3Q7eupGQRjvpi5TEtArwxwpv00I-4ZgGX3C5GJWFMzs7I46GQbyM_o'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});
