const express  = require('express');
let {getAllBook , saveAllBook} = require("./controller/Book")
const app = new express();
app.use(express.json())

//permet de recuperer tous les livres
app.get("/books" , getAllBook);

//permet d inserer des livres
app.post("/books" , saveAllBook);

app.get("/" , (req ,res)=>{
    res.send("ok ca roule tres bien")
});

app.listen(4000 ,()=>{
    console.log("le serveur a demarre sur le port 4000");
})