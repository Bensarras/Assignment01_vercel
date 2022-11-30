//Account Model
//This is the model for the account object need and username email and password

const mongoose = require("mongoose")
const Account_Shema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,

        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    
)
module.exports = mongoose.model("Account", Account_Shema)