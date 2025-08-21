import express from "express";

const app = express();
app.use(express.json());


let ultimoId = 1;

const usuario_admin = {
    id: ultimoId,
    nome: "admin",
    email: "admin@admin"
}

let usuarios = [usuario_admin];
app.get('/usuarios', (req, res) =>{
    res.json(usuarios).status(200);
});
app.post('/usuarios', (req, res) =>{


    const {nome, email} = req.body;
    if(!nome || !email){
        return res.status(400).json({mensagem: "nome e email obrigatórios"});
    }
    return res.status(201).json({mensagem: "criado"})
});


app.listen(3000);