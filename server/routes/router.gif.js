const {Router} = require('express')
const router = Router()
const fs = require('fs');
const multer = require("multer")
const path = require('path');
const crypto = require("crypto");

const maxSize = 1 * 10000 * 10000;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        let type = new Date().toDateString();
        let path = `./uploads/${type}`;
        fs.mkdir(path, ()=>{});
        cb(null, path)

    },
    filename: function (req, file, cb) {
        const id = crypto.randomBytes(20).toString('hex');
        cb(null, `${id}.gif`)
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb){
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);

        const extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());
        console.log(path.extname(
            file.originalname).toLowerCase())
        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }

}).array("files")

router.get("/", function (req, res) {res.send("Ok")})

router.post("/", function (req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log(err)
        } else if (err) {
            console.log(err)
        }
        res.sendStatus(200)
    })
})


module.exports = router;
