const express = require ("express");

const app = express();

const port = process.env.port ||  8000; 

app.use(express.static(__dirname + '/public')); 

app.get("/", (req ,res) => {
res.sendFile(__dirname +'/public/about.html') ;
   res.status(200).json({
    message:"OK"
   });
}) ; 

app.get("/",(req,res) =>{
    res.sendFile(__dirname + '/public/example.html');
    res.status(200).json({
        message:"ok",
    });
}); 

app.listen(port , () =>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});