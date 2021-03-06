var mqtt = require('mqtt');

const MQTT_SERVER   = "localhost";
const MQTT_PORT     = "1883";
const MQTT_USER     = "user1"; 
const MQTT_PASSWORD = "user1";

// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

client.on('connect', function () {
    // Subscribe any topic
    console.log("MQTT Connect");
    client.subscribe('test', function (err) {
        if (err) {
            console.log(err);
        }
    });
});

// Receive Message and print on terminal
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
});

// setInterval(() => {
//     client.publish("test", "hello from NodeJS");
// }, 5000);
