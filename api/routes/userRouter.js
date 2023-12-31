import express from 'express';
import { loggedInUser, userLogin, userSignup, accountActivation, accountActivateByCode, forgotPassword, passwordResetAction, findUserAccount, resendAccountActivation, sendUserIdentificationOTP, checkPasswordResetOTP, passwordReset, userUpdateProfile, getAllUser, userLogout } from '../controllers/userController.js';
import multer, { diskStorage } from 'multer';
import path from "path";
import { userVerify } from '../middlewares/userVerify.js';
const router = express.Router();

const __dirname = path.resolve();

const storage = diskStorage({
    destination : (req, file, cb) => {
        if(file.fieldname === "featuredImage"){
            cb(null, path.join(__dirname, "/api/public/featured-image"));
        }else if(file.fieldname === "profilePhoto"){
            cb(null, path.join(__dirname, "/api/public/profile-photo"));
        }
    },

    filename : (req, file, cb) => {
        cb(null, ((Date.now() / 1000) / 60) + "-" + file.originalname);
    }
});


const uploadFeaturedSlider = multer({ storage : storage }).array('featuredImage', 15);
const uploadProfilePhoto = multer({ storage : storage }).single('profilePhoto');


// user register
router.post('/user-signup', userSignup);
// user login
router.post('/user-login', userLogin);
// user loggedin
router.get('/me', userVerify, loggedInUser);
// get all user data
router.get('/:id', getAllUser);
// user update profile
router.put('/user-profile-update/:id', userVerify, userUpdateProfile);
// user account activation by email
router.get('/user-activation/:token', accountActivation);
// user account activation by code
router.post('/code-activation', accountActivateByCode);
// user account activation resend
router.post('/resend-activation', resendAccountActivation);
// user account activation resend
router.post('/send-user-identification-otp', sendUserIdentificationOTP);
// find user account
router.post('/find-user-account', findUserAccount);
// check password reset otp
router.post('/check-password-reset-otp', checkPasswordResetOTP);
// check password reset otp
router.post('/password-reset', passwordReset);
// user forgot password
router.post('/forgot-password', forgotPassword);
// user password reset action
router.post('/forgot-password/:token', passwordResetAction);
// user logout
router.post('/user-logout', userLogout);




// router export
export default router;
