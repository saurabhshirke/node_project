const mongoose = require('mongoose');

const connectDB = async () => {
  try {
     await mongoose.connect('mongodb+srv://saurabhDev:RtXZLF9hYJAoGvlX@cluster0.kiad1sl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
     console.log('momgo db connected successfully');
    }
  catch (err){
    console.log("momgo db connection error:",err);
  }
}

module.exports = connectDB;