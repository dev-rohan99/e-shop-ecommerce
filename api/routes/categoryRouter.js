import express from 'express';
import { userVerify } from '../middlewares/userVerify.js';
import { createCategory, deleteCategory, editCategoriestatus, editCategory, getCategories, getSingleCategory } from '../controllers/categoryController.js';
import { categoryPhoto } from '../middlewares/multer.js';
const router = express.Router();


router.get('/all', getCategories);
router.get('/:id', getSingleCategory);
router.post('/create', userVerify, categoryPhoto, createCategory);
router.put('/update/:id', userVerify, categoryPhoto, editCategory);
router.patch('/update/:id', userVerify, categoryPhoto, editCategory);
router.put('/status-update/:id', userVerify, editCategoriestatus);
router.patch('/status-update/:id', userVerify, editCategoriestatus);
router.delete('/delete/:id', userVerify, deleteCategory);


// router export
export default router;
