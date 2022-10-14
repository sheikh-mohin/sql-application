const experience_letterService = require("../database/experience_letter.db");
const userService = require("../database/user.db");
const { getResponseStructure } = require("../constants/response.structure");
const { message, status } = require("../constants/response.constants");
const { expLetter } = require("../service/generatePdf");

exports.register = async (req, res) => {
    try {
        const jsonData = req.body;
        const experience_letter = await experience_letterService.get(jsonData.id);
        if (experience_letter.length > 0) {
            return res
                .status(status.conflict)
                .send(
                    getResponseStructure(
                        status.conflict,
                        "Experience letter " + message.alreadyExist
                    )
                );
        }
        const record = await experience_letterService.add({
            ...jsonData,
        });
        if (record) {
            return res
                .status(status.successCreated)
                .send(
                    getResponseStructure(
                        status.successCreated,
                        "Experience letter " + message.createSuccess
                    )
                );
        } else {
            return res
                .status(status.notfound)
                .send(getResponseStructure(status.success, message.somethingWrong));
        }
    } catch (error) {
        return res
            .status(status.success)
            .send(getResponseStructure(status.notfound, error.message.toString()));
    }
};

exports.createExpLetter = async (req, res) => {
    try {
        let user = await userService.findById(req.body.id);
        user = user[0]
        if (!user) {
            return res
                .status(status.success)
                .send(getResponseStructure(status.notfound, "user " + message.notFound));
        }
        await expLetter(user, req.body.date);
        return res
            .status(status.success)
            .send(getResponseStructure(status.notfound, "Experience Letter " + message.pdfGenerated));
    } catch (error) {
        return res
            .status(status.success)
            .send(getResponseStructure(status.notfound, error.message.toString()));
    }
}