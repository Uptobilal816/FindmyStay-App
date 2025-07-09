const mongoose = require("mongoose");
const initdata = require("./data.js")
const listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/FindmyStay";

async function main(){
     await mongoose.connect(MONGO_URL)
}
main().then(()=>{
    console.log("Connected to MongoDB");
})
.catch(()=>{
    console.log("Failed to connect to MongoDB");
});

const initDB = async ()=>{
    await listing.deleteMany({});
    await listing.insertMany (initdata.data );

}

initDB();