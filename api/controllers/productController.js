import productModel from "../models/productModel.js";
import { cloudinaryDelete, cloudinaryUpload } from "../utility/cloudinary.js";
import createError from "../utility/createError.js";
import { makeSlug } from "../utility/makeSlug.js";


/**
 * get all products
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getProducts = async (req, res, next) => {
    try{

        const products = await productModel.find();

        if(products.length === 0){
            return next(createError(404, 'Sorry, product data not found!'));
        }

        if(products.length > 0){
            res.status(200).json({
                products
            });
        }

    }catch(err){
        next(err);
    }
}

/**
 * create product
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const createProduct = async (req, res, next) => {
    try{

        const { name, parentproductId, icon, photo } = req.body;

        if(!name){
            return next(createError(400, 'Please fill out the form!'));
        }

        const productCheck = await productModel.findOne({ name });

        if(productCheck){
            return next(createError(400, 'Sorry, Your categorie already exist!'));
        }

        const slug = makeSlug(name);

        let catIcon = null;
        if(icon){
            catIcon = icon;
        }

        const productPhoto = null;
        if(photo){
            productPhoto = cloudinaryUpload(req.file.path);
        }
        
        const product = await productModel.create({
            ...req.body,
            slug,
            icon: catIcon ? catIcon : null,
            photo: productPhoto ? productPhoto : null,
            parentproductId: parentproductId ? parentproductId : null
        });

        if(parentproductId){
            await productModel.findByIdAndUpdate(parentproductId, {
                $push: { subproduct: product._id }
            });
        }

        return res.status(201).json({
            message: "User product successfully created!",
            product
        });

    }catch(err){
        next(err);
    }
}

/**
 * get single product
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getSingleProduct = async (req, res, next) => {
    try{

        const { id } = req.params;

        const product = await productModel.findOne({ _id: id });

        if(!product){
            return next(createError(400, 'product data not found!'));
        }

        return res.status(200).json({
            product
        });

    }catch(err){
        next(err);
    }
}

/**
 * edit product
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const editProduct = async (req, res, next) => {
    try{

        const { id } = req.params;
        const { name, photo, icon, parentproductId } = req.body;
     
        if(!name){
            return next(createError(400, "Sorry, name field is required!"));
        }

        const slug = makeSlug(name);

        let catIcon = null;
        if(icon){
            catIcon = icon;
        }

        let productPhoto = null;
        if(req.file){
            productPhoto = await cloudinaryUpload(req.file.path);
            await cloudinaryDelete(findPublicId(photo));
        }

        const updatedProduct = await productModel.findByIdAndUpdate(id, {
            ...req.body,
            name: name,
            slug: slug,
            logo: catIcon ? catIcon : null,
            logo: productPhoto ? productPhoto : null,
            parentproductId: parentproductId ? parentproductId : null
        }, { new: true });

        if(!updatedProduct){
            return next(createError(400, "Sorry, product update failed! Try again."));
        }

        if(parentproductId){
            await productModel.findByIdAndUpdate(parentproductId, {
                $push: { subproduct: updatedProduct._id }
            });
        }

        res.status(201).json({
            message: "User product successfully updated!",
            product: updatedProduct
        });

    }catch(err){
        next(err);
    }
}

/**
 * edit product status
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const editProductStatus = async (req, res, next) => {
    try{

        const { id } = req.params;
        const { status } = req.body;

        const updatedProduct = await productModel.findByIdAndUpdate(id, {
            status: !status
        }, { new: true });

        if(!updatedProduct){
            return next(createError(400, "Sorry, permission update failed! Try again."))
        }

        return res.status(201).json({
            message: "User permission status successfully updated!",
            product: updatedProduct
        });

    }catch(err){
        next(err);
    }
}

/**
 * delete product
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const deleteProduct = async (req, res, next) => {
    try{

        const { id } = req.params;
        
        const deletedProduct = await productModel.findByIdAndDelete(id);

        if(!deletedProduct){
            return next(createError(400, "Sorry, product not deleted! Please, try again later."))
        }

        if(deletedProduct.photo){
            await cloudinaryDelete(findPublicId(deletedProduct.photo));
        }

        return res.status(201).json({
            message: "User product successfully deleted!",
            product: deletedProduct
        });

    }catch(err){
        next(err);
    }
}


