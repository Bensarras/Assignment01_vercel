//Emoployee model
//This is the model for the employee object need first name last name, email, gender and salary
const mongoose = require("mongoose")
const Employee_Shema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        gender: {
            type: String,
            required: true,
            values: ["Male","Female", "Other"]
        },
        salary: {
            type: Number,
            required: true,
        }
    });
module.exports = mongoose.model("Employee", Employee_Shema);