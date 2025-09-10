// middleware = 
//nível

// importa o framework
const express = require("express");

// importa middleware de terceiros 
const cors = require('cors');

// importa middleware de rota

const router = require('./routerTarefa');

// cria uma instancia da aplicação
const app = express();

// middleware embutido ou integrado
app.use(express.json()); 
app.use(express.urlencoded({extended: false })); //?param1=valor&param2=valor2

// middleware de terceriso
app.use(cors());

// middleware de aplicação (duas maneiras)
/*
app(function(req, res){
    console.log("Passei aqui");
})
*/
 
app.use((req, res, next) => {
    console.log("Passei aqui");
    next();
});

// middleware de erro
app.use((err, req, res, next) => {
    console.log(err.message); // message imprime só a msg
//    console.log(err.stack); o stack imprime tudo, todo o erro
    res.status(500).send("Algo de erra não está certo!");
});

// inicia a aplicação  (geralmente é o ultimo codigo)
app.listen(3000, ()=>{
    console.log("App está ON!");
});



