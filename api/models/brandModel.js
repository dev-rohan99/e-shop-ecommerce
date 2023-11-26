import mongoose from "mongoose";


const brandDataSchema = mongoose.Schema({

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
    
    logo: {
        type: String,
        required: true
    },

    status : {
        type: Boolean,
        default: false
    },

    trash : {
        type: Boolean,
        default: false
    }

}, {
    timestamps : true
});



const brandModel = mongoose.model('brands', brandDataSchema);

export default brandModel;


