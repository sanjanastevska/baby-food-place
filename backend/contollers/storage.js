const path = require('path');
const multer = require('multer');

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './frontend/public/images/',
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

const upload = async (req, res) => {
    console.log("IN UPLOAD:");
    try {
        await uploadFile(req, res);

        console.log("AFTER UPLOAD:");

        if (req.file === null) {
            res.status(500).send({
                error: true,
                message: 'No file uploaded'
            });
        }
        const file = req.files.document;
        console.log("FILE IN NODEJS:", file);

        file.mv(`${__dirname}/frontend/public/images/${file.name}`);
        res.status(200).send({
            message: 'File is uploaded',
            fileName: file.name,
            filePath: `/images/${file.name}`
        })
    } catch (err) {    
        res.status(500).send({
            error: true,
            message: `Could not upload the file: ${req.file.name}. ${err}`,
        });
    }
}

module.exports = {
    upload
}