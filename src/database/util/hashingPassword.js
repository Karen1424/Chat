/// Standard requires 
const crypto = require('crypto');
require('dotenv').config({path: '../../.env'});  
// Creating a unique salt for a particular user
const salt = process.env.Salt;

class Hashing {

    constructor() {   
    }
    // Method to set salt and hash the password for a user 
    hashingPassword(password) {
        console.log(salt);
        // Hashing user's salt and password with 1000 iterations, 
        const hash = crypto.pbkdf2Sync(password, salt, 
            1000, 64, `sha512`).toString(`hex`);
        return hash;
    }; 
}

module.exports = new Hashing();
  