const redis=require("redis")
const { clientEncryption } = require("../model/User")

const redisClient=redis.createClient({
   socket:{
    host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT
   }
})
redisClient.connect()
.then(()=>console.log("Redis.Connected"))
.catch(err=>console.log("Redis connection error",err))
module.exports=redisClient