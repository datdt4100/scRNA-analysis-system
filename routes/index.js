const multer = require('multer');
const path = require("path");

const home = require('./r_home');
const visualization = require('./r_visualization');
const clustering = require('./r_clustering');
const classification = require('./r_classification');
const inference = require('./r_inference');
//const dataset = require('../app/controllers/c_dataUpload');

storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});

upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb){
  
      // Set the filetypes, it is optional
      var filetypes = /tsv/;

      var extname = filetypes.test(path.extname(
                  file.originalname).toLowerCase());
      
      if (extname) {
          return cb(null, true);
      }
    
      cb("Error: File upload only supports the "
              + "following filetypes - " + filetypes);
    } 
});



function route(app) {
  app.use('/',home); 
  app.use('/classification',classification);
  app.use('/visualization',visualization);
  app.use('/clustering',clustering);
  app.use('/pseudo-time-inference',inference);
  app.use('/publication', (req, res) => {
      res.render('publication_viewer', {layout: 'main.hbs'});
  });
  app.post('/file_upload', upload.single('file'), function(req, res) {
    console.log("Start here\n");
    console.log(req.body);
    const file = req.file;
    console.log(file);
    res.sendStatus(200);
  });  
}

module.exports = route;
