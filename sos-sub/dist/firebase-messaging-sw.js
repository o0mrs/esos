// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBnq3jxJPLAHZVzM7dbVK6fYc_zWAwuCPA",
    authDomain: "c1com-fae54.firebaseapp.com",
    databaseURL: "https://c1com-fae54-default-rtdb.firebaseio.com",
    projectId: "c1com-fae54",
    storageBucket: "c1com-fae54.appspot.com",
    messagingSenderId: "985908238030",
    appId: "1:985908238030:web:e0271c2dde819fc179629f",
    measurementId: "G-J42CTXNDCQ"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
