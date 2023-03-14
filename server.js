const i2c = require('i2c-bus');
const MPU6050 = require('mpu6050');

const bus = i2c.openSync(1);
const mpu = new MPU6050(bus, 0x68);

mpu.initialize();
mpu.setGyroRange(MPU6050.GYRO_FS_2000);

const minVal = -5;
const maxVal = 3;

setInterval(() => {
  const { x, y, z } = mpu.getRotation();
  
  if (x > maxVal || x < minVal || y > maxVal || y < minVal || z > maxVal || z < minVal) {
    console.log('*** Earthquake detected! ***');
  }
}, 100);
