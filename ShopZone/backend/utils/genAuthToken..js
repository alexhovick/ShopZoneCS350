const jwt = require('jsonwebtoken');
require("dotenv").config();
const genAuthToken = (user) =>{
    const secretKey = "supersecretkey2023"

    const token = jwt.sign({
        _id: user._id, name: user.name, email: user.email
    }, 
    secretKey
    );
    
    return token;
}

module.exports = genAuthToken;
