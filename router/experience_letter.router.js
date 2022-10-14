const express = require('express');
express.Router();
const validator = require('../validator/experience_letter.validator'); // Middleware For user validation
const api = require('../controller/experience_letter.controller');

module.exports = (router) => {
    router.post('/experience_letter/generate', api.createExpLetter);
    return router;
};