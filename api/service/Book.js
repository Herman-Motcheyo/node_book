const connection = require("../config/Config")

const getAll = () => {
    const query = "select * from book ";
    connection.query(query, (error, result) => {
        if (error) return error;
        return result;
    })
}

module.exports = {
    getAll
}