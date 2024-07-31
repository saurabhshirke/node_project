const express = require('express');
const multer = require('multer');
const connectDB = require('./db/db_connection');
const File = require('./models/fileModel');

const app = express();

connectDB(); // db connection

const fileUpload = multer({
  storage : multer.diskStorage({
    destination : function(req,res,callback){
      callback(null,'uploads')
    },
    filename: function(req,file,callback){
      const uniqueName = file.fieldname + "-" + Date.now() + ".jpg";
      callback(null,uniqueName)
    }
  })
}).single("my_file")

app.post('/file-upload', fileUpload ,(req,res) => {
  if(!req.file){
    return res.status(400).send('No file Uploaded');
  }

  const newFile  = new File({
    filePath : req.file.path
  })

  newFile.save()
  .then(() => res.send("File uploaded Succesfully "))
  .catch((err) => res.send('Error Uploading File:',err));
})

app.listen(3000);