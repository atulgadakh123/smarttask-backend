const express=require("express")
const connectDB=require("./config/DB")
const userRoutes=require("./routes/UserRoutes")
const taskRoutes=require("./routes/TaskRoutes")


const app=express()
app.use(express.json())
app.use("/api",userRoutes)
app.use("/tasks",taskRoutes)
connectDB()

module.exports=app