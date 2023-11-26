import express from 'express';
import { userVerify } from '../middlewares/userVerify.js';
import { createTag, deleteTag, editTag, editTagStatus, getSingleTag, getTags } from '../controllers/tagController.js';
const router = express.Router();


router.use(userVerify);

router.get('/all', getTags);
router.get('/:id', getSingleTag);
router.post('/create', createTag);
router.put('/update/:id', editTag);
router.patch('/update/:id', editTag);
router.put('/status-update/:id', editTagStatus);
router.patch('/status-update/:id', editTagStatus);
router.delete('/delete/:id', deleteTag);


// router export
export default router;
