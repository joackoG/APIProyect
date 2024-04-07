import express from 'express';
import {Allporducts, getproducts, getList, getCount} from '../controllers/ProductController.js'
const router= express.Router()
router.get('/', Allporducts)
router.get('/:id', getproducts)
router.get('/List/',  getList)


export default router