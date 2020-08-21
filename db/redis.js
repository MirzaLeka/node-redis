const redis = require('redis');

const redisClient = redis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST
);
redisClient.auth(process.env.REDIS_PASSWORD);

redisClient.on('connect', () => {
  console.log('Client connected to redis...')
})

redisClient.on('ready', () => {
  console.log('Client connected to redis and ready to use...')
})

redisClient.on('error', (err) => {
  console.log(err.message)
})

redisClient.on('end', () => {
  console.log('Client disconnected from redis')
})

process.on('SIGINT', () => {
  redisClient.quit()
});

module.exports = redisClient;

// preview in browser,
  // npm i -g redis-commander
  // type redis-commander in cmd
  // open localhost
  // add your server connection
