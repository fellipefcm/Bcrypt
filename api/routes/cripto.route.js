
const express = require('express');
const router = express.Router();

const {bcript} = require('../controller/cripto.controller');

router.post('/', bcript);

module.exports = router;
