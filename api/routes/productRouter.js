import express from 'express';
import { userVerify } from '../middlewares/userVerify.js';
import { brandLogo } from '../middlewares/multer.js';
import { createProduct, deleteProduct, editProduct, editProductStatus, getProducts, getSingleProduct } from '../controllers/productController.js';
const router = express.Router();


router.get('/all', getProducts);
router.get('/:id', getSingleProduct);
router.post('/create', userVerify, brandLogo, createProduct);
router.put('/update/:id', userVerify, brandLogo, editProduct);
router.patch('/update/:id', userVerify, brandLogo, editProduct);
router.put('/status-update/:id', userVerify, editProductStatus);
router.patch('/status-update/:id', userVerify, editProductStatus);
router.delete('/delete/:id', userVerify, deleteProduct);


// router export
export default router;
