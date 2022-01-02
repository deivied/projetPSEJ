const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const userSchema = new mongoose.Schema({
    prenom : {
        type : String,
        required: true
    },
    nom : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true,
        unique : true
    },
    numero : {
        type : String,
        required: true,
        unique : true
    },
    profil : {
        type : String,
        required: true
    },
    etat : {
        type : String,
        default : 'actif'
    },
    img : {
        data : Buffer,
        contentType : String
    },
    secret : {
        type : String,
        required: true
    },
    profiluser : {
        type : Object,
    }
})

userSchema.plugin(uniqueValidator)

module.exports=mongoose.model('User',userSchema);

