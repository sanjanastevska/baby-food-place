const path = require('path');
const multer = require('multer');
// const fs = require('fs');

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/../../frontend/public/uploads/`)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

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

// Create an upload instance and receive a single file
const uploadFile = multer({
    storage,
    limits: { fieldSize: 1000000 },
    fileFilter: (req, file, cb) => {
        allowedTypes(file, cb);
    }
}).single('image');

const upload = async (req, res, next) => {
    try {
        await uploadFile(req, res, next);

        if ( req.files.image === undefined) {
            res.status(500).send({
                error: true,
                message: 'No file uploaded'
            });
        }
        const imageFile = req.files.image;  
        if(!imageFile) {
            imageFile.mv(`${__dirname}/../../frontend/public/uploads/${imageFile.name}`);
        }
        console.log(imageFile.data)
        // imageFile = fs.readFileSync(imageFile);
        // imageFile.save();
        res.status(200).send({
            message: "Uploaded the file successfully: " + imageFile.name,
            imageFile
          });

    } catch (err) {
        res.status(500).send({
            error: true,
            message: `Could not upload the file: ${err}`
        });
    }
    await next;
}

const download = async (req, res, next) => {
    const fileName = req.params.name;
    const directoryPath = `${__dirname}/../../frontend/public/uploads/`;

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
    await next;
}

module.exports = {
    upload,
    download
}

