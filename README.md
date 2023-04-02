# Let's save lives from the impact of earthquakes.

Earthquakes can be extremely devastating, and saving lives during this natural disaster is a top priority. This project aims to provide timely notifications to individuals so that they can prepare and protect themselves during an earthquake.
## Science

When an earthquake occurs, it produces seismic waves that travel through the Earth's crust. The speed of seismic waves varies depending on the type of rock they travel through. On average, seismic waves travel at a speed of 5 km/s in the Earth's crust.

If an earthquake happens at an epicenter, it would take around 30 seconds for the seismic waves to arrive at a nearby city. For example, if an earthquake happens in San Francisco, it would take approximately 30 seconds for the seismic waves to reach downtown San Francisco.

However, if another city is located farther away from the epicenter, it would take longer for the seismic waves to arrive. For instance, if an earthquake happens in San Francisco, it would take approximately 50 seconds for the seismic waves to reach Los Angeles.

so what are we going to do with this information?
we will setup a pi that will detect an earthquake and send a notefecation to ppl in the country to get out of their homes

## Required Hardware and Accounts

To implement this project, you will need the following hardware and accounts:

- Raspberry Pi (any version should be fine)
- MPU6050 sensor
- Firebase account 
- Something to hold the sensor with a wood should be fine
- 2gb server 
- 24/7 internet connection
## Deployment Steps

The deployment steps for this project are divided into 3 parts: website deployment , Pi deployment and server deployment.

### I. Website Deployment

1. Clone the repository
2. Install Node.js. To check if it's installed already, type `node -v`. If it returns the version you're using, Node.js is already installed. If not, you can easily install it from https://nodejs.dev/en/.
3. Get your Firebase credentials. Check [Firebase Docs](https://firebase.google.com/docs/web/setup#add-sdk-and-initialize) for more information.
4. Replace your credentials in [sos-sub/com/firebase.js](sos-sub/com/firebase.js) and [sos-sub/public/firebase-messaging-sw.js](sos-sub/public/firebase-messaging-sw.js). There are comments to help you.
5. Build the app using `npm run build` in Node.js or `bun run build` in BunJS.
6. You'll find a file named `dist` in [sos-sub/dist](sos-sub/dist). Deploy that to your server. If you don't have a server, you could use [Cloudflare Pages](https://pages.cloudflare.com/).

### II. Pi Deployment

1. MPU6050 setup:
- Connect the VCC to 3.3v or 5v
- Connect the GND to any of the GND ports
- Connect the SDA to GPIO2
- Connect the SCL to GPIO3

2. Install Node.js.
3. Install PM2.
4. Run the [server.js](server.js) file using PM2 with the command `pm2 start server.js`. Don't forget to make it run on startup. Check [PM2 Docs](https://pm2.keymetrics.io/docs/usage/startup/) for more information.

# Note

This project is still under development, and more deployment steps for the server will be listed soon. Stay tuned for updates!
