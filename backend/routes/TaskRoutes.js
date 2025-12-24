const express = require("express");
const { createTask, getTasks } = require("../controller/TaskController");
const cacheTasks=require("../middalware/RedisAuth")

const router = express.Router();

router.post("/", createTask);
router.get("/", cacheTasks, getTasks);

module.exports = router;
