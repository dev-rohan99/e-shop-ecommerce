import createError from "../utility/createError.js";
import jwt from "jsonwebtoken";


export const userVerify = (req, res, next) => {

    try{
        const authHeader = req.headers.authorization || req.headers.Authorization;
        const token = authHeader.split(" ")[1];

        // Token check
        if( !token ){
            next(createError(404, 'Sorry! You are not authorized!'));
        }else{

            jwt.verify(token, process.env.JWT_SECRECT, async (err, payload) => {
                if(err) return next(createError(403, 'Token is not valid!'));
                // if(payload._id !== req.params.id) return next(createError(404, 'You are not be able to access this feture!'));
                req.userId = payload.id;
                req.role = payload.role;
                req.username = payload.username;
                next();
            });

        }
    }catch(err){
        next(createError(err));
    }

}


