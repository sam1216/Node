const fetchAdmin = async (req, res, next) => {
    try {
        console.log(req.user,"fetch admin");
        const adminRole = req.user.isAdmin;

        if (!adminRole) {
            return res.status(403).json({ error: "Forbidden Error" });
        }
        
        console.log(adminRole, "isAdmin Msg");
        next()
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = fetchAdmin;
