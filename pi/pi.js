var gyro = require("mpu6050-gyro");
var admin = require("firebase-admin");
var serviceAccount = require("./info.json");
var internetAvailable = require("internet-available");
var start = 1;
var address = 0x68; //MPU6050 address
var bus = 1; //i2c bus used
var gyro = new gyro(bus, address);
function getCurrentDateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const ampm = hours < 12 ? 'AM' : 'PM';
    return `${year}/${month}/${day} ${hours % 12}:${minutes} ${ampm}`;
  }

// Initialize variables for detecting a shake
var accel_last = { x: 0, y: 0, z: 0 };
console.log('Starting')
const starta = ()=>{
    internetAvailable().then(function(){
        console.log("Internet available");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://c1com-fae54-default-rtdb.firebaseio.com"
          });
          const usersRef = admin.database().ref('a');
          usersRef.update({
            x: 0,
            y: 0,
            z:0,
            earth:false,
          });
          const send =(topic,title,msg,)=>{
            const message = {
              notification: {
                title: title,
                body: msg,
              },
              topic: topic,
              webpush: {
                headers: {
                  Urgency: "high",
                  ttl:"0"
                },
                data : {
                  volume: "3.21.15",
                  content: "http://www.news-magazine.com/world-week/21659772"
                },
                notification: {
                  title: title,
                  body: msg,
                  vibrate: [200, 100, 200],

                },

            },

          }
            
            // Send the message to the devices subscribed to the topic
            admin.messaging().send(message)
              .then((response) => {
                console.log("Successfully sent message:", response);
              })
              .catch((error) => {
                console.error("Error sending message:", error);
              });

          }
          const detectandsend = (shake,data,store)=>{
            if(shake >= 600 && shake <= 800){
// low noti acc 50%
send('esos',`EARTHQUAKE (low)`,`level: ${shake} acc:50%`)
            }else if(shake >= 801 && shake <= 1500){
              // med earthquake acc 70%
              send('esos',`EARTHQUAKE (med)`,`level: ${shake} acc:70%`)
            }else if(shake >= 1501 && shake <= 3000){
              // med earthquake acc 90%
              send('esos',`EARTHQUAKE (med)`,`level: ${shake} acc:90%`)
            }else if(shake >= 3001){
              // high earthquake acc 100%
              send('esos',`EARTHQUAKE (HIGH)`,`level: ${shake} acc:100%`)
            }
          }
        async function update_telemetry() {
            var gyro_xyz = gyro.get_gyro_xyz();
            var accel_xyz = gyro.get_accel_xyz();
            var accel_change = {
                x: Math.abs(accel_xyz.x - accel_last.x),
                y: Math.abs(accel_xyz.y - accel_last.y),
                z: Math.abs(accel_xyz.z - accel_last.z)
            };
            var highest = Math.max(accel_change.x, accel_change.y);

            console.log(accel_change);
        if(highest > 530){
            if(start == 0){
                console.log('detection activated')
                start =1;

            }else{

                console.log(`Shake detected! ${getCurrentDateTime()}`);
                console.log(accel_change);
                detectandsend(highest)
  // admin.messaging().setLogLevel('debug');

                usersRef.update({
                    x: accel_change.x,
                    y: accel_change.y,
                    z:accel_change.z,
                    earth:true,
                  });
            }
        
        }
            accel_last = accel_xyz;
            setTimeout(update_telemetry, 500);
        }
        if (gyro) {
            update_telemetry();
        }
    }).catch(function(){
        console.log("No internet trying again in 5 seconds");
        setTimeout(starta, 5000);
    });
}
starta()

