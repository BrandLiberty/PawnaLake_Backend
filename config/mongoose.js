import mongoose from 'mongoose'
const MONGO_URL = "mongodb+srv://pawnalakeholiday:%23PawnaLake123@pawnalake.apaxdtd.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Erroe connecting MOngoDB'));

db.once('open',function(){
    console.log("LOG : Successfully connected to the MONGO_URL",MONGO_URL); 
})

export default db

