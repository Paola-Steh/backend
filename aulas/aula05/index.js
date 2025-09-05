// importa o framework
const express = require("express");

// cria uma instancia da aplicação
const app = express();

// middleware/nível de aplicação (duas maneiras)
/*
app(function(req, res){
    console.log("Passei aqui");
})
*/
 
app.use((req, res, next) => {
    console.log("Passei aqui");
    next();
});

// middleware de rota
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Chegou aqui");
});

router.post('/', (req,res) => {
    res.status(201).send("Inserido com sucesso");
});

router.get("/:id", (req, res) => {
    const { id } = req.params; // {id: 1, param2: 5, param3: 6}
    if (id == 1) return res.send("Achei");
    res.status(400).send("Não achei");
});

app.use('/tarefas', router);

// middleware de erro
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Algo de erra não está certo!");
});

// inicia a aplicação  (geralmente é o ultimo codigo)
app.listen(3000, ()=>{
    console.log("App está ON!");
});



