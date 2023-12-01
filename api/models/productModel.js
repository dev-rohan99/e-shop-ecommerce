import mongoose from "mongoose";


const productDataSchema = mongoose.Schema({

    userId: {
        type: String,
        required: true
    },  

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
    
    shortDesc: {
        type: String,
        required: true
    },
    
    longDesc: {
        type: String,
        required: true
    },

    productType: {
        type: String,
        enum: ["simple", "variable", "group", "affiliate"],
        required: true,
        default: null
    },

    productSimple: {

        regularPrice: {
            type: Number,
            required: true
        },

        salePrice: {
            type: Number,
            required: true
        },

        discount: {
            type: Number,
            default: null
        },

        images: {
            type: [String],
            required: true
        },

        stock: {
            type: Number,
            default: 0
        },

    },

    productVariable: [{
        
        size: {
            type: Number,
            default: null
        },

        color: {
            type: String,
            default: null
        },

        regularPrice: {
            type: Number,
            required: true
        },

        salePrice: {
            type: Number,
            required: true
        },

        discount: {
            type: Number,
            default: null
        },

        images: {
            type: [String],
            required: true
        },

        stock: {
            type: Number,
            default: 0
        },

    }],

    productGroup: [{

        name: {
            type: String,
            required: true
        },

        regularPrice: {
            type: Number,
            required: true
        },

        salePrice: {
            type: Number,
            required: true
        },

        discount: {
            type: Number,
            default: null
        },

        images: {
            type: [String],
            required: true
        },

        stock: {
            type: Number,
            default: 0
        },

    }],

    productAffiliate: {

        regularPrice: {
            type: Number,
            required: true
        },

        discount: {
            type: Number,
            default: null
        },

        salePrice: {
            type: Number,
            required: true
        },

        images: {
            type: [String],
            required: true
        },

        stock: {
            type: Number,
            default: 0
        },

        link: {
            type: String,
            required: true
        }

    },

    specification: {
        type: String
    },

    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brands",
        required: true
    },

    tags: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "tags",
        default: []
    },

    category: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "categories",
        default: ""
    },

    rating: {
        type: Number,
        default: 0
    },

    reviews: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "reviews",
        default: null
    },

    status: {
        type: Boolean,
        default: true
    },

    trash: {
        type: Boolean,
        default: false
    },

    sales: {
        type: Array,
        default: []
    }

}, {
    timestamps : true
});



const productModel = mongoose.model('products', productDataSchema);

export default productModel;


