import multer from "multer";
import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";


const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + Math.round(Math.random() * 99999) + "-" + file.fieldname)
    }
});
export const brandLogo = multer({ storage }).single("logo");

export const cloudinaryUpload = async (req) => {
    const res = await cloudinary.uploader.upload(req.file.path);
    return res.secure_url;
}

export const cloudinaryDelete = async (publicId) => {
    await cloudinary.uploader.destroy(publicId);
}

