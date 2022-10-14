const { conn } = require("../config/db.config");

exports.add = data => {
    return conn('experience_letter').insert(data);
};

exports.update = (id, data) => {
    return conn('experience_letter').where('id', id).update(data);
};

exports.delete = id => {
    return conn('experience_letter').where({ id }).del();
};

exports.get = (page, size) => {
    if ((page === undefined && size === undefined) || (page === "" && size === "")) {
        return conn('experience_letter').orderBy('id', "desc");
    }
    return conn('experience_letter')
        .limit(parseInt(size, 10))
        .orderBy('id', "desc")
        .offset((parseInt(page, 10) - 1) * parseInt(size, 10));
};

exports.getCount = () => {
    return conn('experience_letter').select("").count();
};
exports.getOne = id => {
    return conn
        .select("*")
        .from('experience_letter')
        .where({ id });
};

exports.details = id => {
    return conn('experience_letter').where({ id });
};
