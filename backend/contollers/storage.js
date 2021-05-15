const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const uploadFile = multer({
    storage,
    limits: { fieldSize: 1000000 },
    fileFilter: (req, file, cb) => {
    allowedTypes(file, cb);
    }
}).single('avatar');

const allowedTypes = (file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        return cb('Error: Only image files are allowed');
    }
}

const fetch = (req,res) => {
    const storageDirectory = path.join(__dirname, '..', 'uploads', req.user.id);

    fs.readdir(storageDirectory, (err, files) => {
        if (err) {
          res.status(500).send({
            message: "Unable to scan files!",
          });
        }
    
        let fileInfos = [];
    
        files.forEach((file) => {
          fileInfos.push({
            name: file,
            url: baseUrl + file,
          });
        });
    
        res.status(200).send(fileInfos);
      });
}

const downloadFile = (req, res) => {
    const storageDirectory = path.join(__dirname, '..', 'uploads', req.user.id);
    const fileName = `${req.params.filename}`

    if(!fs.existsSync(`${storageDirectory}/${fileName}`)) {
        res.status(404).send({
            error: true,
            message: 'File not found'
        });
    }

    res.download(`${storageDirectory}/${fileName}`, fileName, err => {
        if (err) {
            res.status(500).send({
                error: true,
                message: "Could not download the file. "
            });
        }
    }) 
    
};

const upload = async (req, res) => {
    try {
        await uploadFile(req, res);

        if (!req.file) {
            res.status(400).send({
                error: true,
                message: 'No file uploaded'
            });
        } else {
            res.status(200).send({
                message: 'File is uploaded',
                file: req.file.originalname
            });
        }

    } catch (err) {
        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
              message: "File size cannot be larger than 2MB!",
            });
        }
        
        res.status(500).send({
            error: true,
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
          });
    }
}

const del = (req, res) => {
    const storageDirectory = path.join(__dirname, '..', 'uploads', req.user.id);
    const file = `${storageDirectory}/${req.params.filename}`;

    if (!fs.existsSync(file)) {
        return res.status(404).send({
          error: true,
          message: 'File not found!'
        });
    }

    fs.unlinkSync(file)

    res.send({
        error: false,
        message: `File with path ${file} is successfully deleted.`
    });
}

module.exports = {
    fetch,
    downloadFile,
    upload,
    del
}