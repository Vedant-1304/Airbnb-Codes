const mongoose = require ("mongoose");
const initData = require ("./data.js");
const listing = require("../models/listing");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}

main()
.then (()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
})

 async function initDB() {
   await  listing.deleteMany({});
    await listing.insertMany(initData.data);
    console.log("initialized")
 }

 initDB ();
