const jwt = require("jsonwebtoken");    
const JWT_SECRET = "Code16ankit$amit";

const fetchUser = async(req, res, next) => {
    //Get the user from the jwt token and add id to req object--
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).json({ Error: "Please authenticate using a vaild Token" });
    }
    try {

        const data = jwt.verify(token, JWT_SECRET)
        console.log(data,"data user")
        req.user = data.user;
    

    } catch (error) {
        res.status(401).json({ Error: "Please authenticate using a vaild Token" });
    }
    next();
}


module.exports = fetchUser;
