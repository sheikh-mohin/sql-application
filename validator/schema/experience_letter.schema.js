const Joi = require('joi').extend(require('@joi/date'));

exports.experience_letterCreation = Joi.object({
    name: Joi.string().lowercase().required(),
    emp_id: Joi.string().lowercase().required(),
    from_date: Joi.date().format('YYYY-MM-DD').utc(),
    to_date: Joi.date().format('YYYY-MM-DD').utc(),
    'he/she': Joi.string().required().lowercase().min(2).max(5).valid(...['he', 'she']),
    'him/her': Joi.string().required().lowercase().min(2).max(5).valid(...['him', 'her']),
    'his/hers': Joi.string().required().lowercase().min(2).max(5).valid(...['his', 'hers']),
    job_role: Joi.string().required().lowercase().min(3).max(20),
    cto: Joi.string().required().lowercase().min(3).max(20),
    date: Joi.date().format('YYYY-MM-DD').utc(),
});

exports.verifyUser = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),
    mobileNumber: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }),
    otp: Joi.string().required()
}).or("email", "mobileNumber");

exports.forgotPassword = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),
    mobileNumber: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }),
});

exports.verifyForgotPassword = Joi.object({
    email: Joi.string().required().lowercase(),
    otp: Joi.string().required(),
    newPassword: Joi.string().required(),
    confirmPassword: Joi.string().required(),
});

exports.login = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),
    mobileNumber: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
}).or("email", "mobileNumber");

exports.login2FA = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),
    mobileNumber: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }),
    otp: Joi.string().required()
}).or("email", "mobileNumber");

exports.codeResend = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),
    mobileNumber: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }),
});

exports.updateUser = Joi.object({
    name: Joi.string(),
    dob: Joi.date().format('YYYY-MM-DD').utc()
});

exports.updateMail = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    isMobileNumber: Joi.boolean(),
}).or("email", "isMobileNumber")

exports.updateMailAndNumber = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),
    mobileNumber: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }),
    otp: Joi.string().required()
}).or("email", "mobileNumber");

exports.changePassword = Joi.object({
    password: Joi.string().required(),
    newPass: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
    confirmPass: Joi.ref("newPass"),
});
