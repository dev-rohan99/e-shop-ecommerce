import tagModel from "../models/tagModel.js";
import createError from "../utility/createError.js";
import { makeSlug } from "../utility/makeSlug.js";


/**
 * get all tags
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getTags = async (req, res, next) => {
    try{

        const tags = await tagModel.find();

        if(tags.length === 0){
            return next(createError(404, 'Sorry, tags data not found!'));
        }

        if(tags.length > 0){
            res.status(200).json({
                tags
            });
        }

    }catch(err){
        next(err);
    }
}

/**
 * create tags
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const createTag = async (req, res, next) => {
    try{

        const { name } = req.body;

        if(!name){
            return next(createError(400, 'Please fill out the form!'));
        }

        const tagsCheck = await tagModel.findOne({ name });

        if(tagsCheck){
            return next(createError(400, 'Sorry, Your tags already exist!'));
        }

        const slug = makeSlug(name);
        
        const tag = await tagModel.create({
            name,
            slug
        });

        return res.status(201).json({
            message: "User tag successfully created!",
            tag
        });

    }catch(err){
        next(err);
    }
}

/**
 * get single tags
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getSingleTag = async (req, res, next) => {
    try{

        const { id } = req.params;

        const tag = await tagModel.findOne({ _id: id });

        if(!tag){
            return next(createError(400, 'tag data not found!'));
        }

        return res.status(200).json({
            tag
        });

    }catch(err){
        next(err);
    }
}

/**
 * edit tags
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const editTag = async (req, res, next) => {
    try{

        const { id } = req.params;
        const { name } = req.body;
     
        if(!name){
            return next(createError(400, "Sorry, name field is required!"));
        }

        const updatedtag = await tagModel.findByIdAndUpdate(id, {
            ...req.body,
            name: name,
            slug: makeSlug(name)
        }, { new: true });

        if(!updatedtag){
            return next(createError(400, "Sorry, tag update failed! Try again."));
        }

        res.status(201).json({
            message: "User tag successfully updated!",
            tag: updatedtag
        });

    }catch(err){
        next(err);
    }
}

/**
 * edit tag status
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const editTagStatus = async (req, res, next) => {
    try{

        const { id } = req.params;
        const { status } = req.body;

        const updatedtag = await tagModel.findByIdAndUpdate(id, {
            status: !status
        }, { new: true });

        if(!updatedtag){
            return next(createError(400, "Sorry, permission update failed! Try again."))
        }

        return res.status(201).json({
            message: "User permission status successfully updated!",
            tag: updatedtag
        });

    }catch(err){
        next(err);
    }
}

/**
 * delete tags
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const deleteTag = async (req, res, next) => {
    try{

        const { id } = req.params;
        
        const deletedtag = await tagModel.findByIdAndDelete(id);

        if(!deletedtag){
            return next(createError(400, "Sorry, tags not deleted! Please, try again later."))
        }

        return res.status(201).json({
            message: "User tag successfully deleted!",
            tag: deletedtag
        });

    }catch(err){
        next(err);
    }
}


