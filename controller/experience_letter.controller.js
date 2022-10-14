const userService = require("../database/user.db");
const { getResponseStructure } = require("../constants/response.structure");
const { message, status } = require("../constants/response.constants");
const { expLetter } = require("../service/generatePdf");

exports.createExpLetter = async (req, res) => {
    try {
        const jsonData = req.body;
        let user = await userService.findById(jsonData.id);
        user = user[0]
        if (!user) {
            return res
                .status(status.success)
                .send(getResponseStructure(status.notfound, "user " + message.notFound));
        }
        await expLetter(user, new Date(jsonData.date));
        return res
            .status(status.success)
            .send(getResponseStructure(status.notfound, "Experience Letter " + message.pdfGenerated));
    } catch (error) {
        return res
            .status(status.success)
            .send(getResponseStructure(status.notfound, error.message.toString()));
    }
}