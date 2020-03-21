const express = require('express');
const routes = express.Router();

const { getBounceDetails, getSavedData } = require('./base.service');
const { routeNames, httpStatusCodes } = require('../../helpers/constants');

const baseControllerRoutes = routeNames.baseController;

routes.post(baseControllerRoutes.bounceDetail, async (req, res) => {
    try {
        const { height, cr } = req.body;
        const response = await getBounceDetails(height, cr);
        res.statusCode = httpStatusCodes.OK;
        res.json(response);
    } catch (err) {
        res.statusCode = httpStatusCodes.InternalServerError;
        res.send(err);
    }
});

routes.get(baseControllerRoutes.getSavedData, async (req, res) => {
    try {
        const response = await getSavedData();
        res.statusCode = httpStatusCodes.OK;
        res.json(response);
    } catch (err) {
        res.statusCode = httpStatusCodes.InternalServerError;
        res.send(err);
    }
});


module.exports = routes;