importScripts("https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js"
);

var firebaseConfig = {
  apiKey: "AIzaSyDnedvh0AIJMopTWKJAPbPAwNE995_vBaA",
  authDomain: "concricv1.firebaseapp.com",
  databaseURL: "https://concricv1.firebaseio.com",
  projectId: "concricv1",
  storageBucket: "concricv1.appspot.com",
  messagingSenderId: "1007915377475",
  appId: "1:1007915377475:web:bee06aa750180c1c8bc5f6",
  measurementId: "G-52LLLK0R41",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(payload);
  const notification = JSON.parse(payload);
  const notificationOption = {
    body: notification.body,
    icon: notification.icon,
  };
  return self.registration.showNotification(
    payload.notification.title,
    notificationOption
  );
});
