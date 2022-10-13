const connection = require("../config/Config")

let getAllBook = (req, res) => {
    const query = "select * from book ";
    connection.query(query, (error, result) => {
        if (error) return res.json(error);
        return res.json(result);
    })
}

let saveAllBook = (req, res) => {
    const query = " insert into book (`title` ,`price`, `description` ,`cover`) values(?)";
    const values = [
        req.body.title,
        req.body.price,
        req.body.description,
        req.body.cover
    ]

    connection.query(query, [values], (error, result) => {
        if (error) return res.json(error);
        return res.json(result);
    })
}

let deleteBook = (req, res) => {
    let id = req.params.id;
    let query = "delete  from book  where id = " + id
    connection.query(query,  (error, result) => {
        if (error) return res.json(error);
        return res.json(result);
    })
}

let updateBook = (req , res)=>{
    let id = req.params.id;
    let query = "update  book  set  `title` = ? , `description`= ? , `price`= ? , `cover` = ? where id = ?" ;
    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.connection
    ]
    
    connection.query(query, [...values , id], (error, result) => {
        if (error) return res.json(error);
        console.log(result)
        return res.json(result);
    })
}

module.exports = {
    getAllBook,
    saveAllBook,
    deleteBook,
    updateBook
}