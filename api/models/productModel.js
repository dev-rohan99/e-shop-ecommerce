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
        enum: ["simple", "downloadable", "variable", "group", "affiliate"],
        required: true,
        default: null
    },

    productSimple: {

        regularPrice: {
            type: Number,
        },

        salePrice: {
            type: Number,
        },

        discount: {
            type: Number,
            default: null
        },

        images: {
            type: [String],
        },

        stock: {
            type: Number,
            default: 0
        },

    },

    productDownloadable: {

        regularPrice: {
            type: Number,
        },

        salePrice: {
            type: Number,
        },

        discount: {
            type: Number,
            default: null
        },

        images: {
            type: [String],
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
        },

        salePrice: {
            type: Number,
        },

        discount: {
            type: Number,
            default: null
        },

        images: {
            type: [String],
        },

        stock: {
            type: Number,
            default: 0
        },

    }],

    productGroup: [{

        name: {
            type: String,
        },

        regularPrice: {
            type: Number,
        },

        salePrice: {
            type: Number,
        },

        discount: {
            type: Number,
            default: null
        },

        images: {
            type: [String],
        },

        stock: {
            type: Number,
            default: 0
        },

    }],

    productAffiliate: {

        regularPrice: {
            type: Number,
        },

        discount: {
            type: Number,
            default: null
        },

        salePrice: {
            type: Number,
        },

        images: {
            type: [String],
        },

        stock: {
            type: Number,
            default: 0
        },

        link: {
            type: String,
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
        default: []
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


