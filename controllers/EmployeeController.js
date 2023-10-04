const {createEmployee, getAllEmployee, getEmployeeById,updateEmployeeById,deleteEmployeeById} = require('../services/emp.service')


const createEmployeeControl = async (req, res) => {
    try {
        const {name, designation, email, phone, age} = req.body;
        const employee = await createEmployee({name, designation, email, phone, age});

        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating the employee.' });
    }
};

const getAllEmployeeControl = async (req, res) => {
    try {
        const employee = await getAllEmployee()
        res.status(201).json({data: employee, status: 'success'})
    } catch (err) {
        res.status(500).json({ message: 'An erroe occurred while getting all employee.' });
    }
};  

const getEmployeeByIdControl = async (req, res) => {
    try {
        const employee = await getEmployeeById(req.params.id)
        res.status(201).json({data: employee, status: 'success'})
    } catch (err) {
        res.status(500).json({ message: 'An error occurred while getting employee by id.' });
    }
};


const updateEmployeeByIdcontrol = async (req, res) => {
    try {
        const employee = await updateEmployeeById(req.params.id, req.body)
        res.status(201).json({data: employee, status: 'success'})
    } catch (err) {
        res.status(500).json({ message: 'An error occurred while update employee ' });
    }
};

const deleteEmployeeByIdcontrol = async(req, res)=> {
    try{
        const employee = await deleteEmployeeById(req.params.id)
        res.status(201).json({data: employee, status: 'success'})
    }catch(err){
        res.status(500).json({message:'An Error Occur'})
    }
}

module.exports = {
    createEmployeeControl, getAllEmployeeControl, getEmployeeByIdControl, updateEmployeeByIdcontrol,deleteEmployeeByIdcontrol
}