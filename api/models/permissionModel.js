import mongoose from "mongoose";


const permissionDataSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    
    slug: {
        type: String,
        unique: true,
        required: true
    },

    access : {
        type: Array,
        required: true
    },

    status : {
        type: Boolean,
        default: true
    },

    trash : {
        type: Boolean,
        default: false
    }

}, {
    timestamps : true
});



const permissionModel = mongoose.model('permissions', permissionDataSchema);

export default permissionModel;


