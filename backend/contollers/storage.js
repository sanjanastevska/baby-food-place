const path = require('path');
const multer = require('multer');

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
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



const upload = async (req, res, next) => {
    console.log("IN UPLOAD:");
    // Create an upload instance and receive a single file
    const uploadFile = multer({
    storage,
    limits: { fieldSize: 1000000 },
    fileFilter: (req, file, cb) => {
    allowedTypes(file, cb);
    }
    }).single('image');
    try {
        await uploadFile(req, res, next);

        console.log("AFTER UPLOAD:");

        if (req.file === null) {
            res.status(500).send({
                error: true,
                message: 'No file uploaded'
            });
        }
        const imageFile = req.files.image;
        console.log("FILE IN NODEJS:", imageFile);

        imageFile.mv(`public/uploads/${imageFile.name}`);
        res.status(200).send({
            message: 'File is uploaded',
            fileName: imageFile.name,
            filePath: `public/uploads/${imageFile.name}`
        })
    } catch (err) {    
        res.status(500).send({
            error: true,
            message: `Could not upload the file: ${err}`
        });
    }
    await next;
}

module.exports = {
    upload
}

