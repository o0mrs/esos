# Let's save lives from the impact of earthquakes.
We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway
## required hardware and accounts
- raspberrypi (any version should be fine)
- MPU6050 sensor
- firebase account 
- something to hold the sensor with a wood should be fine
## deployment steps
### I. website deployment
1. clone the repo
2. install nodejs
to check if it's installed already type `node -v` it should return the version you're using
if you dont have it installed you can easly install it from
https://nodejs.dev/en/
3. get your firebase creds
check [firebase docs](https://firebase.google.com/docs/web/setup#add-sdk-and-initialize) for more info
4. replace your creds in [sos-sub/com/firebase.js](sos-sub/com/firebase.js) and [sos-sub/public/firebase-messaging-sw.js](sos-sub/public/firebase-messaging-sw.js) there's comment to help you
5. build the app using `npm run build` in nodejs or `bun run build` in bunjs
6. you'll find a file named dist in [sos-sub/dist](sos-sub/dist) deploy that to your server 
if you dont have a server you could use [cloudflare pages](https://pages.cloudflare.com/)
### II. pi deployment


