const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewModel = new Schema({
    name: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const Review = mongoose.model('Review', reviewModel);

module.exports = Review;