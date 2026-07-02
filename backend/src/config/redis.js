const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
       password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-14645.c325.us-east-1-4.ec2.cloud.redislabs.com',
        port: 14645
    }
});

module.exports = redisClient;



// const { createClient }  = require('redis');

// const redisClient = createClient({
//     username: 'default',
//     password: process.env.REDIS_PASS,
//     socket: {
//         host: 'redis-19934.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
//         port: 19934
//     }
// });

// module.exports = redisClient;