const router = require("express").Router();
const file = require("../model/UploadFile");

var dbobj = require('./saveFile');

app.post("/teacher-assessments", (req, res) => {
    //   const newpath = __dirname + "/files/";
    const newpath = 'public/files/';
      const file = req.files.file;
      const filename = file.name;
    //   file.mv(`${newpath}${filename}`, (err) => {
        file.mv(`${newpath}${filename}`, (err) => {  
            if (err) {
          res.status(500).send({ message: "File upload failed", code: 200 });
        }
        else{
            var insobj = {
                email: req.body.email,
                file: filename
            };
           
            dbobj.insert_file(insobj);

        res.status(200).send({ message: "File Uploaded", code: 200 });
        
        }  
    });
    });