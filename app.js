const express = require("express");
const app = express() ; 
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")
const path = require("path")

app.set('view engine', "ejs")
app.set("views",path.join (__dirname,"views"))
app.use(express.urlencoded({extended : true}));

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

//Index route
app.get("/listings", async (req,res)=>{
    const alllistings =  await Listing.find({});
    res.render('listings/index.ejs', {alllistings})
    
})

//new route
app.get("/listings/new",(req,res)=>{
   res.render("listings/new.ejs")
})

//create route
app.post("/listings",async (req,res)=>{
  const newlisting = new Listing(req.body.newlisting)
await newlisting.save();
res.redirect("/listings")

})

//Show route
app.get("/listings/:id", async (req,res)=>{
   let {id} = req.params;
   let listing =  await Listing.findById(id);
   res.render("listings/show.ejs",{listing});
})

// app.get('/testinglist',(req,res)=>{
//  let samplelisting = new Listing({
//     title: "Sample Listing",
//     Description: "This is a sample description for the listing.",
//     image: "https://unsplash.com/photos/people-enjoy-a-sunny-day-at-the-beach-FyJIofiJrCM",
//     price: 100,
//     location: "Sample Location",
//     country: "Sample Country"
//  })
//  samplelisting.save();
//     res.send("Sample listing created successfully");
// })
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})