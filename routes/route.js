const express = require('express');
const router = express.Router();

const LeaderBoard = require('../models/leaderboard');

//retrieving contracts data
router.get('/leaderboards', (req, res, next)=>{
    LeaderBoard.find((err, leaderboard)=>{
        res.json(leaderboard);
    });
});

//adding contacts data
router.post('/leaderboard', (req, res, next)=>{
    let newLeader = new LeaderBoard({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        wpm: req.body.wpm
    });
    newLeader.save((err, leaderboard)=>{
        if(err){
            res.json({msg: 'Failed to add'});
        }
        else{
            res.json(leaderboard);
        }
    });
});

//delete contacts data
router.delete('/leaderboard/:id', (req, res, next)=>{
    LeaderBoard.deleteOne({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});


module.exports = router;