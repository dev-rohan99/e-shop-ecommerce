import categoryModel from "../models/categoryModel.js";
import { cloudinaryDelete, cloudinaryUpload } from "../utility/cloudinary.js";
import createError from "../utility/createError.js";
import { makeSlug } from "../utility/makeSlug.js";


/**
 * get all categories
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getCategories = async (req, res, next) => {
    try{

        const categories = await categoryModel.find().populate([
            {
                path: "parentCategoryId",
                populate: {
                    path: "parentCategoryId",
                    populate: {
                        path: "parentCategoryId"
                    }
                }
            },

            {
                path: "subCategories",
                populate: {
                    path: "subCategories",
                    populate: {
                        path: "subCategories"
                    }
                }
            }
        ]);

        if(categories.length === 0){
            return next(createError(404, 'Sorry, categories data not found!'));
        }

        if(categories.length > 0){
            res.status(200).json({
                categories
            });
        }

    }catch(err){
        next(err);
    }
}

/**
 * create categories
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const createCategory = async (req, res, next) => {
    try{

        const { name, parentCategoryId, icon, photo } = req.body;

        if(!name){
            return next(createError(400, 'Please fill out the form!'));
        }

        const categoriesCheck = await categoryModel.findOne({ name });

        if(categoriesCheck){
            return next(createError(400, 'Sorry, Your categorie already exist!'));
        }

        const slug = makeSlug(name);

        let catIcon = null;
        if(icon){
            catIcon = icon;
        }

        const categoryPhoto = null;
        if(photo){
            categoryPhoto = cloudinaryUpload(req.file.path);
        }
        
        const category = await categoryModel.create({
            ...req.body,
            slug,
            icon: catIcon ? catIcon : null,
            photo: categoryPhoto ? categoryPhoto : null,
            parentCategoryId: parentCategoryId ? parentCategoryId : null
        });

        if(parentCategoryId){
            await categoryModel.findByIdAndUpdate(parentCategoryId, {
                $push: { subCategories: category._id }
            });
        }

        return res.status(201).json({
            message: "User category successfully created!",
            category
        });

    }catch(err){
        next(err);
    }
}

/**
 * get single categories
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getSingleCategory = async (req, res, next) => {
    try{

        const { id } = req.params;

        const category = await categoryModel.findOne({ _id: id });

        if(!category){
            return next(createError(400, 'category data not found!'));
        }

        return res.status(200).json({
            category
        });

    }catch(err){
        next(err);
    }
}

/**
 * edit categories
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const editCategory = async (req, res, next) => {
    try{

        const { id } = req.params;
        const { name, photo, icon, parentCategoryId } = req.body;
     
        if(!name){
            return next(createError(400, "Sorry, name field is required!"));
        }

        const slug = makeSlug(name);

        let catIcon = null;
        if(icon){
            catIcon = icon;
        }

        let categoryPhoto = null;
        if(req.file){
            categoryPhoto = await cloudinaryUpload(req.file.path);
            await cloudinaryDelete(findPublicId(photo));
        }

        const updatedcategory = await categoryModel.findByIdAndUpdate(id, {
            ...req.body,
            name: name,
            slug: slug,
            logo: catIcon ? catIcon : null,
            logo: categoryPhoto ? categoryPhoto : null,
            parentCategoryId: parentCategoryId ? parentCategoryId : null
        }, { new: true });

        if(!updatedcategory){
            return next(createError(400, "Sorry, category update failed! Try again."));
        }

        if(parentCategoryId){
            await categoryModel.findByIdAndUpdate(parentCategoryId, {
                $push: { subCategories: updatedcategory._id }
            });
        }

        res.status(201).json({
            message: "User category successfully updated!",
            category: updatedcategory
        });

    }catch(err){
        next(err);
    }
}

/**
 * edit category status
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const editCategoriestatus = async (req, res, next) => {
    try{

        const { id } = req.params;
        const { status } = req.body;

        const updatedCategory = await categoryModel.findByIdAndUpdate(id, {
            status: !status
        }, { new: true });

        if(!updatedCategory){
            return next(createError(400, "Sorry, permission update failed! Try again."))
        }

        return res.status(201).json({
            message: "User permission status successfully updated!",
            category: updatedCategory
        });

    }catch(err){
        next(err);
    }
}

/**
 * delete categories
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const deleteCategory = async (req, res, next) => {
    try{

        const { id } = req.params;
        
        const deletedCategory = await categoryModel.findByIdAndDelete(id);

        if(!deletedCategory){
            return next(createError(400, "Sorry, categories not deleted! Please, try again later."))
        }

        if(deleteCategory.photo){
            await cloudinaryDelete(findPublicId(deleteCategory.photo));
        }

        return res.status(201).json({
            message: "User category successfully deleted!",
            category: deletedCategory
        });

    }catch(err){
        next(err);
    }
}


