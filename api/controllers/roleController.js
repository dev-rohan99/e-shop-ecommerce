import roleModel from "../models/roleModel.js";
import createError from "../utility/createError.js";
import { makeSlug } from "../utility/makeSlug.js";


/**
 * get all Roles
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getRoles = async (req, res, next) => {
    try{

        const roles = await roleModel.find();

        if(roles.length === 0){
            return next(createError(404, 'Sorry, roles data not found!'));
        }

        return res.status(200).json(roles);

    }catch(err){
        next(err);
    }
}

/**
 * create Roles
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const createRole = async (req, res, next) => {
    try{

        const { name } = req.body;

        if(!name){
            return next(createError(400, 'Please fill out the form!'));
        }

        const rolesCheck = await roleModel.findOne({ name });

        if(rolesCheck){
            return next(createError(400, 'Sorry, Your Roles already exist!'));
        }

        const slug = makeSlug(name);
        
        const role = await roleModel.create({
            name,
            slug
        });

        return res.status(201).json({
            message: "User role successfully created!",
            role
        });

    }catch(err){
        next(err);
    }
}

/**
 * get single Roles
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getSingleRole = async (req, res, next) => {
    try{

        const { id } = req.params;

        const role = await roleModel.findOne({ _id: id });

        if(!role){
            return next(createError(400, 'Role data not found!'));
        }

        return res.status(200).json({
            role
        });

    }catch(err){
        next(err);
    }
}

/**
 * edit Roles
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const editRole = async (req, res, next) => {
    try{

        const { id } = req.params;
        const { name } = req.body;
        const slug = makeSlug(name);

        const updatedRole = await roleModel.findByIdAndUpdate(id, {
            ...req.body,
            slug
        }, { new: true });

        if(!updatedRole){
            return next(createError(400, "Sorry, Role update failed! Try again."))
        }

        return res.status(201).json({
            message: "User role successfully updated!",
            role: updatedRole
        });

    }catch(err){
        next(err);
    }
}

/**
 * delete Roles
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const deleteRole = async (req, res, next) => {
    try{

        const { id } = req.params;
        
        const deletedRole = await roleModel.findByIdAndDelete(id);

        if(!deletedRole){
            return next(createError(400, "Sorry, Roles not deleted! Please, try again later."))
        }

        return res.status(201).json({
            message: "User role successfully deleted!",
            role: deletedRole
        });

    }catch(err){
        next(err);
    }
}


