const { response } = require('express');
const express = require('express')
const AccountModel = require('../modules/AccountModel');
const router = express.Router()


//Create a new account
router.post('/user/signup', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Account content can not be empty"
        });
    }

    // Create a new account
    const account = new AccountModel(req.body);
    try{
        const newAccount = await account.save();
        res.status(201).send(newAccount);
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Account."
        });
    }

    // Save account in the database
    account.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the account."
        });
    });
});

//Login to an account
router.post('/user/login', async (req, res) => {
    //login to an account
    
    
    const Ulogin = await AccountModel.findOne({username: req.body.username});
    if(Ulogin == null){
        return res.status(400).send('Cannot find user');
    }else{
        res.status(200).send("Login Succesfully" + Ulogin);





    }



})
module.exports = router

// router.post('/user/login', async (req, res) => {
//     //login to an account
//     if(!req.body) {
//         return res.status(400).send({
//             message: "Account content can not be empty"
//         });
//     }
//     try {
//         const userlogin = await AccountModel.findOne({username: req.body.username, password: req.body.password});
//         if (!userlogin) {
//           res.status(401).json({
//             message: "Login not successful",
//             error: "User not found",
//           })
//         } else {
//           res.status(200).json({
//             message: "Login successful",
//             userlogin,
//           })
//         }
//       } catch (error) {
//         res.status(400).json({
//           message: "An error occurred",
//           error: error.message,
//         })
    
//     }
    

