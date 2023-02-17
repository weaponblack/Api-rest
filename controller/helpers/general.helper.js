/**packages */
const CryptoJS = require("crypto-js");
const config = require("config");

/**Encrypt password */

exports.EncryptPassword = (password) =>{
    let secretKey = config.get("secretKeys").CryptoJS;
    var encryptPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptPassword;
};