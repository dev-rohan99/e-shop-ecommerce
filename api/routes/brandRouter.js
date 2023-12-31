import express from 'express';
import { userVerify } from '../middlewares/userVerify.js';
import { createBrand, deleteBrand, editBrand, editBrandStatus, getBrands, getSingleBrand } from '../controllers/brandController.js';
import { brandLogo } from '../middlewares/multer.js';
const router = express.Router();


router.get('/all', getBrands);
router.get('/:id', getSingleBrand);
router.post('/create', userVerify, brandLogo, createBrand);
router.put('/update/:id', userVerify, brandLogo, editBrand);
router.patch('/update/:id', userVerify, brandLogo, editBrand);
router.put('/status-update/:id', userVerify, editBrandStatus);
router.patch('/status-update/:id', userVerify, editBrandStatus);
router.delete('/delete/:id', userVerify, deleteBrand);


// router export
export default router;
