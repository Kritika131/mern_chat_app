
const express = require("express")
const dotenv = require("dotenv");
const chats = require("./dummy-data/dummy_data");
const connectDB = require("./config/db_connection");
dotenv.config()

const app = express();
const port = process.env.PORT || 9090;

app.get('/',(req,res)=>{
  res.send("API is running")
})
app.get('/api/chats',(req,res)=>{
  res.send(chats)
})

connectDB().then(()=>{
  app.listen(port,()=>{
    console.log("Server running!!",port);
  })

}).catch((err)=>{
  console.log(err.message);
})