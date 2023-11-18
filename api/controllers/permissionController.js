import permissionModel from "../models/permissionModel.js";
import createError from "../utility/createError.js";
import { makeSlug } from "../utility/makeSlug.js";


/**
 * get all permission
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getAllPermissions = async (req, res, next) => {
    try{

        const permissions = await permissionModel.find();
        
        if(permissions.length === 0){
            return next(createError(404, 'Sorry, permissions data not found!'));
        }

        res.status(200).json({
            permissions: permissions
        });

    }catch(err){
        next(err);
    }
}

/**
 * create permission
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const createPermission = async (req, res, next) => {
    try{

        const { name } = req.body;

        if(!name){
            return next(createError(400, 'Please fill out the form!'));
        }

        const permissionCheck = await permissionModel.findOne({ name });

        if(permissionCheck){
            return next(createError(400, 'Sorry, Your permission already exist!'));
        }

        const slug = makeSlug(name);
        
        const permission = await permissionModel.create({
            name,
            slug
        });

        return res.status(201).json({
            message: "User permission successfully created!",
            permission
        });

    }catch(err){
        next(err);
    }
}

/**
 * get single permission
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const getSinglePermission = async (req, res, next) => {
    try{

        const { id } = req.params;

        const permission = await permissionModel.findOne({ _id: id });

        if(!permission){
            return next(createError(400, 'Permission data not found!'));
        }

        return res.status(200).json({
            permission
        });

    }catch(err){
        next(err);
    }
}

/**
 * edit permission
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const editPermission = async (req, res, next) => {
    try{

        const { id } = req.params;
        const { name } = req.body;
        const slug = makeSlug(name);

        const updatedPermission = await permissionModel.findByIdAndUpdate(id, {
            ...req.body,
            slug
        }, { new: true });

        if(!updatedPermission){
            return next(createError(400, "Sorry, permission update failed! Try again."))
        }

        return res.status(201).json({
            message: "User permission successfully updated!",
            permission: updatedPermission
        });

    }catch(err){
        next(err);
    }
}

/**
 * edit permission status
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const editPermissionStatus = async (req, res, next) => {
    try{

        const { id } = req.params;
        const { status } = req.body;

        const updatedPermission = await permissionModel.findByIdAndUpdate(id, {
            status: !status
        }, { new: true });

        if(!updatedPermission){
            return next(createError(400, "Sorry, permission update failed! Try again."))
        }

        return res.status(201).json({
            message: "User permission status successfully updated!",
            permission: updatedPermission
        });

    }catch(err){
        next(err);
    }
}

/**
 * delete permission
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const deletePermission = async (req, res, next) => {
    try{

        const { id } = req.params;
        
        const deletedPermission = await permissionModel.findByIdAndDelete(id);

        if(!deletedPermission){
            return next(createError(400, "Sorry, permission not deleted! Please, try again later."))
        }

        return res.status(201).json({
            message: "User permission successfully deleted!",
            permission: deletedPermission
        });

    }catch(err){
        next(err);
    }
}


