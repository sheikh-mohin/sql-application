require('dotenv').config();

const conn = require('knex')({
    client: 'pg',
    connection: {
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
    },
    pool: { min: 0, max: 7 },
    log: {
        warn(message) {
            console.log(message);
        },
        error(message) {
            console.log(message);
        }
    }
});

module.exports = {
    conn
};
