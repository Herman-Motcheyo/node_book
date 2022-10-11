const express  = require('express');
let {getAllBook} = require("./controller") ;

const app = new express();

app.get("/" , getAllBook);
app.get("/hello" , ()=>{
    res.send("ok ca roule")
});