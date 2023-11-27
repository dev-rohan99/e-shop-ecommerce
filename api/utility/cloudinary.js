import multer from "multer";
import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";


const storage = multer.memoryStorage();
export const brandLogo = multer({ storage }).single("logo");

export const cloudinaryUpload = async (req) => {
    fs.writeFileSync("./" + req.file.originalname, req.file.buffer);
    const res = await cloudinary.uploader.upload("./" + req.file.originalname, req.file.buffer);
    fs.unlinkSync("./" + req.file.originalname);
    return res.secure_url;
}

