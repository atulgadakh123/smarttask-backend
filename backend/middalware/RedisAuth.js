const redisClient = require("../config/Redis");

const cacheTasks = async (req, res, next) => {
  const cachedData = await redisClient.get("TASKS");

  if (cachedData) {
    console.log("⚡ Redis cache hit");
    return res.json(JSON.parse(cachedData));
  }

  console.log("❌ Cache miss");
  next();
};

module.exports = cacheTasks;
