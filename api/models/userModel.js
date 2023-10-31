import mongoose from "mongoose";


const userDataSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },
    
    email : {
        type : String,
        unique : true,
        trim : true,
        required: true
    },

    phone : {
        type : String,
        unique : true,
        trim : true
    },

    username : {
        type : String,
        unique : true,
        trim : true
    },

    password : {
        type : String,
        required : true,
        trim : true
    },

    birthDate : {
        type : String
    },

    birthMonth : {
        type : String
    },

    birthYear : {
        type : String
    },

    gender : {
        type : String,
        enum : ['male', 'female', 'other']
    },

    avatar : {
        type : String,
        default : null
    },

    addresses: [
        {
            country: {
                type: String
            },
            city: {
                type: String
            },
            address1: {
                type: String
            },
            address2: {
                type: String,
            },
            zipCode: {
                type: Number,
            },
            addressType: {
                type: String,
            },
        }
    ],

    role: {
        type: String,
        enum: ["user"],
        default: "user"
    },

    following : {
        type : Array,
        default : []
    },

    reports : {
        type : Array,
        default : []
    },

    accessToken :{
        type : String
    },
    
    createdAt: {
        type: Date,
        default: Date.now()
    },

    resetPasswordToken: {
        type: String
    },

    resetPasswordTime: {
        type: String
    }

}, {
    timestamps : true
});



const userModel = mongoose.model('users', userDataSchema);

export default userModel;


