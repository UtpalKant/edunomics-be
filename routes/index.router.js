const express = require('express');
const router = express.Router();

const baseController = require('../src/base.module/base.controller');

router.use('/api', baseController);

module.exports = router;