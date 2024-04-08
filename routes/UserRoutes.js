import express from 'express';
import {Allusers, getUser} from '../controllers/UsuarioController.js'
const router= express.Router()
router.get('/', Allusers)
router.get('/:id', getUser)
export default router