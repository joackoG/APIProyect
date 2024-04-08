import express from 'express';
import {Allporducts, getproducts, getList, getLastProduct  } from '../controllers/ProductController.js'
const router= express.Router()
router.get('/', Allporducts)
router.get('/last/', getLastProduct  )

router.get('/:id', getproducts)





export default router