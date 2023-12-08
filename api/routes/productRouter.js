import express from 'express';
import { userVerify } from '../middlewares/userVerify.js';
import { productPhotos } from '../middlewares/multer.js';
import { createProduct, deleteProduct, editProduct, editProductStatus, getProducts, getSingleProduct } from '../controllers/productController.js';
const router = express.Router();


router.get('/all', getProducts);
router.get('/:id', getSingleProduct);
router.post('/create', userVerify, productPhotos, createProduct);
router.put('/update/:id', userVerify, productPhotos, editProduct);
router.patch('/update/:id', userVerify, productPhotos, editProduct);
router.put('/status-update/:id', userVerify, editProductStatus);
router.patch('/status-update/:id', userVerify, editProductStatus);
router.delete('/delete/:id', userVerify, deleteProduct);


// router export
export default router;
