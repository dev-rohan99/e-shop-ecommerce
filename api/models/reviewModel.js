import mongoose from "mongoose";


const reviewDataSchema = mongoose.Schema({

    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
        required: true
    },

    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    
    rating: {
        type: Number,
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



const reviewModel = mongoose.model('reviews', reviewDataSchema);

export default reviewModel;


