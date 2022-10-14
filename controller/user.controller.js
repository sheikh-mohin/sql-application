const userService = require("../database/user.db");
const { getResponseStructure } = require("../constants/response.structure");
const { message, status } = require("../constants/response.constants");
const { formatNumberLength, numToWords } = require("../utils/index.util");

exports.register = async (req, res) => {
    try {
        const jsonData = req.body;
        const findUser = await userService.details("+91" + jsonData.phone_number);
        if (findUser.length > 0) {
            return res
                .status(status.conflict)
                .send(
                    getResponseStructure(
                        status.conflict,
                        "User " + message.alreadyExist
                    )
                );
        }
        if (jsonData.gender === 'male') {
            jsonData['he/she'] = 'he';
            jsonData['him/her'] = 'him';
            jsonData['his/hers'] = 'his';
            jsonData['his/hers'] = 'his';
        } else {
            jsonData['he/she'] = 'she';
            jsonData['him/her'] = 'her';
            jsonData['his/hers'] = 'hers';
        }
        let CTCinWords = await numToWords(jsonData['ctc'])
        jsonData['ctc'] = "₹ " + jsonData['ctc'];
        jsonData['phone_number'] = "+91" + jsonData['phone_number'];
        let count = await userService.getCount();
        const record = await userService.add({
            employee_id: "ID – " + formatNumberLength(parseInt(count[0].count) + 1),
            ctcInWord: CTCinWords,
            ...jsonData,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        if (record) {
            return res
                .status(status.successCreated)
                .send(
                    getResponseStructure(
                        status.successCreated,
                        "User " + message.createSuccess
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