import mongoose from "mongoose";


const roleDataSchema = mongoose.Schema({

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

    permissions : {
        type: Array,
        required: true
    }

}, {
    timestamps : true
});



const roleModel = mongoose.model('roles', roleDataSchema);

export default roleModel;


