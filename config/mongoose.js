import mongoose from 'mongoose'
const MONGO_URL = "mongodb://127.0.0.1/pawnalake_db"

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Erroe connecting MOngoDB'));

db.once('open',function(){
    console.log("LOG : Successfully connected to the MONGO_URL",MONGO_URL); 
})

export default db

