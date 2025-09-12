const express = require('express');
const router = express.Router();

const tarefas = [  
    { id: 1, nome: "Estudar middleware", concluida: false },  
    { id: 2, nome: "Praticar Express", concluida: true }  
  ];
  
  // cria uma instancia da aplicação
const app = express();

// importa middlewares de rotas

router.get('/tarefas', (req, res) => {
    res.send(tarefas);
});

router.post('/tarefas', (req,res) => {
    console.log(req.body);
    res.status(201).send(tarefas); // esse treco dps do "send" é um JSON
});

router.get("/tarefas/:id", (req, res) => {
    const { id } = req.params; 
    const tarefa = tarefas.find( item => item.id === id);
    if (tarefa) return res.send(tarefa)
});

router.put("/tarefas/:id", (req, res) => {
    const { id } = req.params; // {id: 1, param2: 5, param3: 6}
    const tarefa = tarefas.find( item => item.id === id);
    if (tarefa){
        tarefa.nome = req.body.nome
        tarefa.concluida = req.body.concluida 
        return res.send(tarefa)
    }
});

router.delete("/tarefas/:id", (req, res) => {
    const { id } = req.params; // {id: 1, param2: 5, param3: 6}
    const position = tarefas.findIndex( item => item.id === id);
    if(position >= 0){
        tarefas.splice(position,1)
    }
    res.status(204).end();

    // msg middleware de erro
    router.get("/tarefas/:id", (err, req, res, next) => {
        const { id } = req.params; // {id: 1, param2: 5, param3: 6}
        if(id != 1 && id !=2) res.status(500).send("tarefa não localizada")
    });
    
    router.put("/tarefas/:id", (err, req, res, next) => {
        const { id } = req.params; // {id: 1, param2: 5, param3: 6}
        if(id != 1 && id !=2) res.status(500).send("tarefa não localizada")
    });
    
    router.delete("/tarefas/:id", (err, req, res, next) => {
        const { id } = req.params; // {id: 1, param2: 5, param3: 6}
        if(id != 1 && id !=2) res.status(500).send("tarefa não localizada")
    });

});

// Middleware de log
app.use((req, res, next) => {
    const dataHora = new Date().toISOString(); // Formato padrão ISO
    console.log(`[${dataHora}] ${req.method} ${req.url}`);
    next(); // Passa para o próximo middleware ou rota
  });

// inicia a aplicação  (geralmente é o ultimo codigo)
app.listen(3000, ()=>{
    console.log("App rodando!");
});







// middleware embutido ou integrado
app.use(express.json()); 
app.use(express.urlencoded({extended: false })); //?param1=valor&param2=valor2



// Exporta a instância do app
module.exports = app;