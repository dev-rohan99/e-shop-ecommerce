import brandModel from "../models/brandModel.js";
import createError from "../utility/createError.js";
import { makeSlug } from "../utility/makeSlug.js";


/**
 * get all brands
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getBrands = async (req, res, next) => {
    try{

        const brands = await brandModel.find();

        if(brands.length === 0){
            return next(createError(404, 'Sorry, brands data not found!'));
        }

        if(brands.length > 0){
            res.status(200).json({
                brands
            });
        }

    }catch(err){
        next(err);
    }
}

/**
 * create brands
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const createBrand = async (req, res, next) => {
    try{

        const { name, permissions } = req.body;

        if(!name){
            return next(createError(400, 'Please fill out the form!'));
        }

        const brandsCheck = await brandModel.findOne({ name });

        if(brandsCheck){
            return next(createError(400, 'Sorry, Your brands already exist!'));
        }

        const slug = makeSlug(name);
        
        const brand = await brandModel.create({
            name,
            slug,
            permissions
        });

        return res.status(201).json({
            message: "User brand successfully created!",
            brand
        });

    }catch(err){
        next(err);
    }
}

/**
 * get single brands
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getSingleBrand = async (req, res, next) => {
    try{

        const { id } = req.params;

        const brand = await brandModel.findOne({ _id: id });

        if(!brand){
            return next(createError(400, 'brand data not found!'));
        }

        return res.status(200).json({
            brand
        });

    }catch(err){
        next(err);
    }
}

/**
 * edit brands
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const editBrand = async (req, res, next) => {
    try{

        const { id } = req.params;
        const { name, permissions } = req.body;
     
        if(!name){
            return next(createError(400, "Sorry, name field is required!"));
        }

        const updatedbrand = await brandModel.findByIdAndUpdate(id, {
            ...req.body,
            name: name,
            slug: makeSlug(name),
            permissions: permissions
        }, { new: true });

        if(!updatedbrand){
            return next(createError(400, "Sorry, brand update failed! Try again."));
        }

        res.status(201).json({
            message: "User brand successfully updated!",
            brand: updatedbrand
        });

    }catch(err){
        next(err);
    }
}

/**
 * edit brand status
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const editBrandStatus = async (req, res, next) => {
    try{

        const { id } = req.params;
        const { status } = req.body;

        const updatedbrand = await brandModel.findByIdAndUpdate(id, {
            status: !status
        }, { new: true });

        if(!updatedbrand){
            return next(createError(400, "Sorry, permission update failed! Try again."))
        }

        return res.status(201).json({
            message: "User permission status successfully updated!",
            brand: updatedbrand
        });

    }catch(err){
        next(err);
    }
}

/**
 * delete brands
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const deleteBrand = async (req, res, next) => {
    try{

        const { id } = req.params;
        
        const deletedbrand = await brandModel.findByIdAndDelete(id);

        if(!deletedbrand){
            return next(createError(400, "Sorry, brands not deleted! Please, try again later."))
        }

        return res.status(201).json({
            message: "User brand successfully deleted!",
            brand: deletedbrand
        });

    }catch(err){
        next(err);
    }
}


