const path = require('path');
const gateway = require('express-gateway');
const Redis = require("ioredis");

new Redis({
    sentinels: [
        { host: "localhost", port: 26379 },
        { host: "localhost", port: 26380 }
    ],
    name: "mymaster"
});

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
