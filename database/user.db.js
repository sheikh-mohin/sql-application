const { conn } = require("../config/db.config");

exports.add = data => {
    return conn('user').insert(data);
};

exports.update = (id, data) => {
    return conn('user').where('id', id).update(data);
};

exports.delete = id => {
    return conn('user').where({ id }).del();
};

exports.get = (page, size) => {
    if ((page === undefined && size === undefined) || (page === "" && size === "")) {
        return conn('user').orderBy('id', "desc");
    }
    return conn('user')
        .limit(parseInt(size, 10))
        .orderBy('id', "desc")
        .offset((parseInt(page, 10) - 1) * parseInt(size, 10));
};

exports.getCount = () => {
    return conn('user').select("").count();
};
exports.getOne = id => {
    return conn
        .select("*")
        .from('user')
        .where({ id });
};

exports.details = phone_number => {
    return conn('user').where({ phone_number });
};

exports.findById = id => {
    return conn('user').where({ id });
};
