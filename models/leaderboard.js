const mongoose = require('mongoose');

const LeaderBoardSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    wpm: {
        type: Number,
        required: true
    }
});

const LeaderBoard = module.exports = mongoose.model('Leaders', LeaderBoardSchema);