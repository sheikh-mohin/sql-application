const validate = require('./schema/experience_letter.schema');
const { getResponseStructure } = require("../constants/response.structure");
const { status } = require("../constants/response.constants");

exports.experience_letterRegister = (req, res, next) => {
  try {
    const { value, error } = validate.experience_letterCreation.validate(req.body);
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