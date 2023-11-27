import jwt from "jsonwebtoken";
import createError from "../utility/createError";


export const adminMiddleware = (req, res, next) => {

    try{
        const token = req.cookies.authToken;

        // Token check
        if( !token ){
            next(createError(401, 'Sorry! You are not authorized!'));
        }else{

            const loginUser = jwt.verify(token, process.env.JWT_ADMIN_SECRECT);

            if( !loginUser ){
                next(createError(401, 'Invalid token!'));
            }else if( loginUser._id !== req.params.id ){
                next(createError(401, 'You are not be able to access this feture!'));
            }else if( loginUser.Role !== "admin" ){
                next(createError(401, 'Sorry, you are not able to access this features! This features only accessable for admin. Please reach out to admin and discuss about your problems.'));
            }else{
                req.user = loginUser;
                next();
            }

        }
    }catch(err){
        next(createError(err));
    }

}


