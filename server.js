var gyro = require("mpu6050-gyro");
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
var address = 0x68; //MPU6050 address
var bus = 1; //i2c bus used

var gyro = new gyro(bus, address);

// Initialize variables for detecting a shake
var accel_last = { x: 0, y: 0, z: 0 };
var shake_threshold = 5000; // Units of acceleration

async function update_telemetry() {

    var gyro_xyz = gyro.get_gyro_xyz();
    var accel_xyz = gyro.get_accel_xyz();

    // Calculate the change in acceleration since the last reading
    var accel_change = {
        x: Math.abs(accel_xyz.x - accel_last.x),
        y: Math.abs(accel_xyz.y - accel_last.y),
        z: Math.abs(accel_xyz.z - accel_last.z)
    };
// console.log(accel_change)
    // Check if the change in acceleration exceeds the threshold in any axis
    // var is_shaking = accel_change.x > shake_threshold ||
    //     accel_change.y > shake_threshold ||
    //     accel_change.z > shake_threshold;
if(accel_change.y > 530){
    console.log(`Shake detected! ${getCurrentDateTime()}`);
    console.log(accel_change);
}
    // if (is_shaking) {
    //     console.log("Shake detected!");
    // }

    accel_last = accel_xyz;

    setTimeout(update_telemetry, 500);
}

if (gyro) {
    update_telemetry();
}
