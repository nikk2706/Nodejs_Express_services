const express = require('express')
const {createEmployeeControl,getAllEmployeeControl,getEmployeeByIdControl,updateEmployeeByIdcontrol,destroy,deleteEmployeeByIdcontrol} = require('../controllers/EmployeeController')

const router = express.Router()

router.post('/', createEmployeeControl)
router.get('/', getAllEmployeeControl)
router.get('/:id', getEmployeeByIdControl)
router.put('/:id', updateEmployeeByIdcontrol)
router.delete('/:id', deleteEmployeeByIdcontrol)



module.exports = router
