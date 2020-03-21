const express = require('express');
const routes = express.Router();

const { getBounceDetails, getSavedData } = require('./base.service');

routes.post('/bounceDetails', async (req, res)=>{
    try{
        const {height, cr} = req.body;
        const response = await getBounceDetails(height, cr);
        res.statusCode = 200;
        res.json(response);
    } catch(err){
        res.statusCode = 500;
        res.send(err);
    }
});

routes.get('/getSavedData', async(req, res)=>{
    try{
        const response = await getSavedData();
        res.statusCode = 200;
        res.json(response);
    } catch(err){
        res.statusCode = 500;
        res.send(err);
    }
});


module.exports = routes;