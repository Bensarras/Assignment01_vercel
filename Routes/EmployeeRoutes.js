const express = require('express')
const EmployeeModel = require('../Modules/EmployeeModel');
const router = express.Router()

//Create a new employee
router.post('/emp/employees', async (req, res) => {

    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Employee content can not be empty"
        });
    }

    // Create a new employee
    const employee = new EmployeeModel(req.body);
    try{
        const newEmployee = await employee.save();
        res.status(201).send(newEmployee);
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Employee."
        });
    }
});

// Retrieve all employees
router.get('/emp/employees', async (req, res) => {
    try{
        const employees = await EmployeeModel.find();
        res.status(200).send(employees);
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving employees."
        });
    }
});

// Retrieve a single employee with id
router.get('/emp/employees/:id', async (req, res) => {
    try{
        const employee = await EmployeeModel.findById(req.params.id);
        res.status(200).send(employee);
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving employee."
        });
    }
});

// Update a employee with id
router.put('/emp/employees/:id', async (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Employee content can not be empty"
        });
    }

    // Find employee and update it with the request body
    try{
        const employee = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(employee);
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while updating the employee."
        });
    }
});

// Delete a employee with id
router.delete('/emp/employees/:id', async (req, res) => {
    try{
        const employee = await EmployeeModel.findByIdAndRemove(req.params.id);
        res.status(204).send(employee);
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while deleting the employee."
        });
    }
});




module.exports = router