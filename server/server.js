var express = require('express')
const cors = require('cors');
const app = express();
var admin = require("firebase-admin");
var serviceAccount = require("./info.json");
app.use(cors())
app.use(express.json());
const keymaster = "imssaginseioqxwqondqioqi3023)#$D@)#09oJIDE3()$DMf3jiwofklendrkio"
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://c1com-fae54-default-rtdb.firebaseio.com"
  });
  
app.post('/adddata', (req, res) => {
    const key = req.body.key
    const data = req.body.data
    if(keymaster === key){
        res.send({code:200,status:"Done"});
    }else{
        res.send({code:200,status:"Invailed auth key"});
    }
//   res.send({code:200,status:"Done"});

});
app.post('/adduser', (req, res) => {
    const user = req.body.user
    console.log(req.body.user)

      admin.messaging().subscribeToTopic(user, `esos`)
      .then((response) => {
        // See the MessagingTopicManagementResponse reference documentation
        // for the contents of response.
        res.send({code:200})
        console.log('Successfully subscribed to topic:', response);
      })
      .catch((error) => {
        console.log('Error subscribing to topic:', error);
        res.send({code:501})
      });



});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});