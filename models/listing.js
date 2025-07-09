const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title :{
        type : String,
        required : true
    },
    description : {
     type : String,
     },
    image: {
        filename: { type: String },
        url: { 
            type: String, 
            default: "https://unsplash.com/photos/people-enjoy-a-sunny-day-at-the-beach-FyJIofiJrCM",
            set: v => v === "" ? "https://unsplash.com/photos/people-enjoy-a-sunny-day-at-the-beach-FyJIofiJrCM" : v
        }
    },
    price : {
        type : Number,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    country: {
        type: String,
        required: true
    }

})
module.exports = mongoose.model("Listing", listingSchema)