import multer from "multer";
import fs from "fs";


const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + Math.round(Math.random() * 99999) + "-" + file.fieldname)
    }
});

export const brandLogo = multer({ storage }).single("brand-logo");
export const categoryPhoto = multer({ storage }).single("category-photo");
export const productPhotos = multer({ storage }).array("product-photo");
