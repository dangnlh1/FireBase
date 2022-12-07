// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyA82UEi-Xy7a4sti_GJbDio5njfsG3eMuk",
  authDomain: "vuondau-450bf.firebaseapp.com",
  projectId: "vuondau-450bf",
  storageBucket: "vuondau-450bf.appspot.com",
  messagingSenderId: "870614266903",
  appId: "1:870614266903:web:9fe0fdce407701aacb9852",
  measurementId: "G-M1X45NJNW6"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };  self.registration.showNotification(notificationTitle, notificationOptions);
});