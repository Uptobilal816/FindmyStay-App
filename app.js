const express = require("express");
const app = express() ; 
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/FindmyStay";

async function main(){
     await mongoose.connect(MONGO_URL)
}
main().then(()=>{
    console.log("Connected to MongoDB");
})
.catch(()=>{
    console.log("Failed to connect to MongoDB");
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})