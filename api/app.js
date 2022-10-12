const express  = require('express');
let {getAllBook} = require("./controller/Book")
const app = new express();

app.get("/book" , getAllBook);
app.get("/" , (req ,res)=>{
    res.send("ok ca roule tres bien")
});

app.listen(4000 ,()=>{
    console.log("le serveur a demarre sur le port 4000");
})