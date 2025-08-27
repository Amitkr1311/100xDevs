const JWT = require('jsonwebtoken');
const jwt_secret = "s3cret";

function auth(req,res,next) {
    const token = req.headers.token;
    const response = JWT.verify(token,jwt_secret);
    if(response) {
        req.userId = response.id;
        next();
    }
    else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = {
    auth, 
    jwt_secret
}