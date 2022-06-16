// initiate an express instance

var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors'); 

app.use(cors())

// Create a multer instance and set the destination folder. The code below uses /public folder.
//   The code below uses ‘originalfilename’as the file name i.e. assign a new file name upon upload. 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

// Create an upload instance and receive a single file

var upload = multer({ storage: storage }).single('file')

// Setup the POST route to upload a file

app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
        //    Start an upload object and handle an error, check formulter error before general errors. 
        //    Status OK (200) with metadata is sent back to the client on successful upload.
      return res.status(200).send(req.file)

    })

});

// Make the server listen on port 8000.

app.listen(8000, function() {

    console.log('App running on port 8000');

});


