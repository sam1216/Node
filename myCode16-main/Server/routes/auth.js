const express = require('express');
const app = express();
const router = express.Router();
const { body } = require('express-validator');
const { createUser, login, getUser, updateUser, deleteUser } = require('../controller/authUser');
const fetchUser = require("../middleware/fetchUser")
const multer = require("multer");
const path = require("path")

app.use(express.static("public"))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
   const name = Date.now()+"-"+ path.extname(file.originalname);
   cb(null,name);
  }
})


const fileFilter = (req, file, cb) => {
  (file.mimetype == "image/jpeg" || file.mimetype == "iamge/png" )? 
  cb(null, true):cb(null,false)
}
const upload = multer({ storage: storage, fileFilter: fileFilter })


// Route for creating a user
router.post('/createuser',upload.single("image"), [
    // Validation middleware
    body("name", "Name must be 3 or more characters").isLength({ min: 3 }),
    body("email", "Enter a valid email address").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({ min: 5 })
], createUser)
    .post('/login', [
        body("email", "Enter a vaild Email Id").isEmail(),
        body("password", "Enter a vaild Password").exists(),
    ], login)
    .post("/getuser",fetchUser,getUser)
    .patch("/updateuser/:id",fetchUser,updateUser)
    .delete("/deleteuser/:id",fetchUser,deleteUser)

module.exports = router;
