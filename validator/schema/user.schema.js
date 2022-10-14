const Joi = require('joi').extend(require('@joi/date'));

exports.userRegister = Joi.object({
    name: Joi.string().lowercase().min(3).max(40).required(),
    'mr/mrs/miss': Joi.string().required().min(2).max(5).valid(...['Mr.', 'Mrs.', 'Miss.']),
    phone_number: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }).required(),
    gender: Joi.string().required().lowercase().valid(...['male', 'female', 'other']),
    ctc: Joi.string().required(),
    designation: Joi.string().min(3).max(40).required(),
    job_role: Joi.string().required().lowercase().min(3).max(20),
    join_date: Joi.date().format('YYYY-MM-DD').utc(),
    leave_date: Joi.date().format('YYYY-MM-DD').utc(),
    offer_valid: Joi.date().format('YYYY-MM-DD').utc(),
    basic_salary: Joi.string(),
    house_rent_allowance: Joi.string(),
    medical_allowance: Joi.string(),
    variable_allowance: Joi.string(),
    personal_allowance: Joi.string(),
    tds: Joi.string(),
});