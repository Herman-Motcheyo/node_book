const connection = require("../config/Config")

let getAllBook = (req , res)=>{
    const query = "select * from book ";
    connection.query(query, (error, result) => {
        if (error) return res.json(error);
        return res.json(result);
    })
}


module.exports = {getAllBook}