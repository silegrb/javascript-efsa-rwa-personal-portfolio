const router = require('express').Router();
const Review = require('../models/ReviewModel');

router.get('/', async (req,res) => {
    try{
        const reviews = await Review.find();
        res.send(reviews);
    }catch (e){
        res.status(400).json({message: 'Something went wrong'});
    }
});

module.exports = router;