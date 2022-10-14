const validate = require('./schema/user.schema');
const { getResponseStructure } = require("../constants/response.structure");
const { status } = require("../constants/response.constants");

exports.userRegister = (req, res, next) => {
    try {
        const { value, error } = validate.userRegister.validate(req.body);
        if (error) {
            return res
                .status(status.conflict)
                .send(
                    getResponseStructure(status.conflict, { error: error.message.toString() })
                );
        }
        req.body = value;
        next();
    } catch (e) {
        next(e);
    }
};