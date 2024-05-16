const User = require("../models/User")

//Route-3: Get  the user using GET "api/auth/getuser" --  Login Required--
async function getAllUser(req, res){
    try {
        const user = await User.find().select("-password");
        res.status(200).send(user);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ Error: "Internal Server Error" });
    }
}



module.exports = getAllUser;