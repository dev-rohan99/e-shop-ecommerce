import express from 'express';
import { userVerify } from '../middlewares/userVerify.js';
import { createRole, deleteRole, editRole, getRoles, getSingleRole } from '../controllers/roleController.js';
const router = express.Router();


router.use(userVerify);

router.get('/', getRoles);
router.get('/:id', getSingleRole);
router.post('/create', createRole);
router.put('/update/:id', editRole);
router.patch('/update/:id', editRole);
router.delete('/delete/:id', deleteRole);


// router export
export default router;
