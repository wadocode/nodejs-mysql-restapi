import { Router } from "express";
import {getEmployees,postEmployee, putEmployee, deleteEmployee, getEmployee } from '../controllers/employees.controller.js'
const router = Router()

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', postEmployee)

router.patch('/employees/:id', putEmployee)

router.delete('/employees/:id', deleteEmployee)


export default router