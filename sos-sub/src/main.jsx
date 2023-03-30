import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
if ('serviceWorker' in navigator) {
  console.log('no')
  // navigator.serviceWorker.ready.then(registration => {
  //   registration.register();

  //   if (caches) {
  //     // Service worker cache should be cleared with caches.delete()
  //     caches.keys().then(async (names) => {
  //       await Promise.all(names.map(name => caches.delete(name)));
  //     });
  //   }
  // });
}else{
  console.log('yes')
  navigator.serviceWorker.ready.then(registration => {
    registration.register();
  })
  //   if (caches) {
  //     // Service worker cache should be cleared with caches.delete()
  //     caches.keys().then(async (names) => {
  //       await Promise.all(names.map(name => caches.delete(name)));
  //     });
  //   }
  // });
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
)
