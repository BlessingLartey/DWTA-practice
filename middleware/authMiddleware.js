const jwt = require ("jsonwebtoken");

const authMiddleware = (req, res, next ) => {
    const token = req.headers("Authorization");

    if(!token){
        return res.status(401).send("Access denied.");

    }

    // const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).send("Invalid token.");
    }
}

module.exports = authMiddleware;