import express from 'express';
import { userVerify } from '../middlewares/userVerify.js';
import { createPermission, deletePermission, editPermission, editPermissionStatus, getAllPermissions, getSinglePermission } from '../controllers/permissionController.js';
const router = express.Router();


router.use(userVerify);

router.get('/all', getAllPermissions);
router.get('/:id', getSinglePermission);
router.post('/create', createPermission);
router.put('/update/:id', editPermission);
router.patch('/update/:id', editPermission);
router.put('/status-update/:id', editPermissionStatus);
router.patch('/status-update/:id', editPermissionStatus);
router.delete('/delete/:id', deletePermission);


// router export
export default router;
