const redis = require('radis');

const redistURL = 'redis://127.0.01:<code>';

const client = redis.createClient(redistUrl);

client.set("name", "radis");

console.log("data is set now");

client.get("name",(error, value)=>{
    if (error) {
        console.log(error);
    }
    console.log(value);
});