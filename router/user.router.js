const express = require('express');
express.Router();
const validator = require('../validator/user.validator'); // Middleware For user validation
const api = require('../controller/user.controller');

module.exports = (router) => {
    router.post('/user/register', validator.userRegister, api.register);
    return router;
};