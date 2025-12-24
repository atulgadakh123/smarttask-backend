const redisClient = require("../config/Redis");
const Task = require("../model/Task");
const redis=require("redis")

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);

  await redisClient.set("TASKS", JSON.stringify(task),{
    EX:60
  })
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  await redisClient.set("TASKS", JSON.stringify(tasks),{
    EX:60
  })
  res.json(tasks);
};
