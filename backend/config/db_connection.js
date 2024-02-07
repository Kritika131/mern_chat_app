
const mongoose = require("mongoose")
const dotenv= require('dotenv')
dotenv.config()

const connectDB = async ()=>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    });
    console.log('mongoDB connected--- ',conn.connection.host);
  } catch(err){
      console.log("db error--",err.message);
      process.exit()
  }
}

module.exports=connectDB