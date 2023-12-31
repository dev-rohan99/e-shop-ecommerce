import mongoose from "mongoose";


const categoryDataSchema = mongoose.Schema({

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
    
    photo: {
        type: String,
        required: true
    },
    
    icon: {
        type: String,
        required: true
    },
    
    parentCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        default: null
    },
    
    subCategories: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "categories",
        default: null
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



const categoryModel = mongoose.model('categories', categoryDataSchema);

export default categoryModel;


