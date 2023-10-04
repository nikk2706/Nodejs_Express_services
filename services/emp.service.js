const Employee = require('../models/Employee')

const createEmployee = async (employee) => {    
    return await Employee.create(employee)
}

const getAllEmployee = async () => {
    return await Employee.find()
}

const getEmployeeById = async (id) => {
    return await Employee.findById(id)
}

const updateEmployeeById = async (id, employee) => {
    return await Employee.findByIdAndUpdate(id, employee)
}

const deleteEmployeeById = async(id)=>{
    return await Employee.findByIdAndDelete(id)
}
module.exports = {
    createEmployee,
    getAllEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById
}