const express = require('express');
const userRouter = require("./routes/user")
const {connectMongoDB} = require("./connection")
const {logReqRes} = require("./middlewares/index")


const app = express()
const port = 3000


//Connection
connectMongoDB("mongodb://localhost:27017/curd-app-1").then(()=>{
  console.log("Connected to MongoDB")
})




//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logReqRes("log.txt"))



//Routes
app.use("/api/users", userRouter)




//Server Start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})