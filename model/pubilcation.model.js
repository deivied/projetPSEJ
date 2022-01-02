const timespan = require('jsonwebtoken/lib/timespan');
const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    publication : {
        type : String,

    },
    date : {
        type : String,
        default : Date.now()

    },
    proprietaire : {
        type: mongoose.Types.ObjectId, 
        ref: 'User'
    }

})

const publicationModel = mongoose.model('Publication', publicationSchema);

module.exports = publicationModel;