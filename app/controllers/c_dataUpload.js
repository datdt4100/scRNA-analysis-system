const multer = require('multer');
const path = require("path")

class Dataset{
    uploadFile(req, res, next){
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'uploads')
            },
            filename: function (req, file, cb) {
                cb(null, file.originalname);
            }
        })
        
        var upload = multer({ 
            storage: storage,
            fileFilter: function (req, file, cb){
            
                // Set the filetypes, it is optional
                var filetypes = /tsv/;
          
                var extname = filetypes.test(path.extname(
                            file.originalname).toLowerCase());
                console.log(extname);
                
                if (extname) {
                    return cb(null, true);
                }
              
                cb("Error: File upload only supports the "
                        + "following filetypes - " + filetypes);
              } 
        }).single("file");   
        
        upload(req, res, (err)=>{
            //res.send(req.file);
            if (err){
                res.send(err);
            }
            else {
                res.send("Success");
            }
        })
    }
}

module.exports = new Dataset;