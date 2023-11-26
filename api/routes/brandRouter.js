import express from 'express';
import { userVerify } from '../middlewares/userVerify.js';
import { createBrand, deleteBrand, editBrand, editBrandStatus, getBrands, getSingleBrand } from '../controllers/brandController.js';
const router = express.Router();


router.use(userVerify);

router.get('/all', getBrands);
router.get('/:id', getSingleBrand);
router.post('/create', createBrand);
router.put('/update/:id', editBrand);
router.patch('/update/:id', editBrand);
router.put('/status-update/:id', editBrandStatus);
router.patch('/status-update/:id', editBrandStatus);
router.delete('/delete/:id', deleteBrand);


// router export
export default router;
