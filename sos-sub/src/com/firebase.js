import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBnq3jxJPLAHZVzM7dbVK6fYc_zWAwuCPA",
  authDomain: "c1com-fae54.firebaseapp.com",
  projectId: "c1com-fae54",
  storageBucket: "c1com-fae54.appspot.com",
  messagingSenderId: "985908238030",
  appId: "1:985908238030:web:e0271c2dde819fc179629f",
  measurementId: "G-J42CTXNDCQ",
  databaseURL: "https://c1com-fae54-default-rtdb.firebaseio.com/",

};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const db = getDatabase(app);

export const requestForToken = async () => {
  if(localStorage.getItem('token')){
    alert(`It's already enabled`);
    window.location.replace("https://esos.pages.dev/done");
  }else{
   getToken(messaging, { vapidKey: "BFis-cQVENFyIavJl96JRuQk3zWceC0YvjQOJYYHYQmfEda4WqnZeLNmkxepB5jTVm4sVx_JSrlBR1vYvUcPhPg" })
    .then(async (currentToken) => {
      if (currentToken) {
        // alert(currentToken);
        // console.log(currentToken);
      await  fetch('https://sosapi.zuisos.info/adduser', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: currentToken
  })
})
.then(response => response.json())
.then(data =>  {
  console.log(data)
  localStorage.setItem('token', currentToken);
  window.location.replace("https://zuisos.info/done");

})
.catch(error => console.error(error));
        


        
        // return(currentToken)
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        alert('No registration token available. Request permission to generate one.');
        console.log('No registration token available. Request permission to generate one.');
        // return('no')
      }
    })
    .catch((err) => {
        alert('An error occurred while retrieving token. '+ err);
        console.log('An error occurred while retrieving token. '+ err);
    //   return('no')
    });
  }
 
};

