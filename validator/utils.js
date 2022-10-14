const crypto = require('crypto');

exports.md5 = (txt) =>
    crypto.createHash('md5').update(txt).digest('hex');

exports.httpResponse = {
    badRequest: ({ message, data }) => {
        return {
            statusCode: 400,
            message: message || 'Bad request payload',
            data,
        };
    },
    forbidden: ({ message, data }) => {
        return {
            statusCode: 403,
            message: message || 'Forbidden',
            data: data,
        };
    },
    notFound: ({ message }) => {
        return {
            statusCode: 404,
            message: message || 'Not found',
        };
    },
    serverError: ({ message }) => {
        return {
            statusCode: 500,
            message: message || 'An internal error has occurred',
        };
    },
    ok: ({ message, data }) => {
        return {
            statusCode: 200,
            message: message || 'Success',
            data,
        };
    },
    created: ({ message, data }) => {
        return {
            statusCode: 201,
            message: message || 'Created successfully',
            data,
        };
    },
};

// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript#1349426
exports.randomString = (length = 6) => {
    return Math.random().toString(36).substr(2, length); // 2si6m
};

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
exports.randomNumber = (min = 10000, max = 99999) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; // 98390 - default 5 digit
};