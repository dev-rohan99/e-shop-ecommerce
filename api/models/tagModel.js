import mongoose from "mongoose";


const tagDataSchema = mongoose.Schema({

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



const tagModel = mongoose.model('tags', tagDataSchema);

export default tagModel;


