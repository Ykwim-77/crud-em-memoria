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
    ultimoId++;
    const novoUsuario = { id: ultimoId, nome, email };
    usuarios.push(novoUsuario);
    return res.status(201).json({mensagem: "criado"});

    
});

app.get('/usuario/:id', (req, res) =>{
    const { id } = req.params;
    const usuario = usuarios.find(u => u.id == id)

    if(!usuario){
        return res.status(404).json({mensagem: "usuario não encontrado!!"});
    }
    res.json(usuario);
});

app.put('/usuario/:id', (req, res) =>{
    const { id } = req.params;
    const { nome, email} = req.body;

    const usuario = usuarios.find(u =>u.id == id);

    if(!usuario){
        return res.status(404).json({mensagem: "usuario não encontrado!!!"});
    };
    if(nome) usuario.nome = nome;
    if(email) usuario.email = email;

    res.json({mensagem: `usuario ${usuario.nome}, do id ${usuario.id} foi encontrado`});
});

app.delete('/usuario/:id', (req, res) =>{
    const { id } = req.params;
    const usuario_deletado = usuarios.find(u => u.id == id);

    if(usuario_deletado === -1){
        return res.status(404).json({mensagem: "usuario não foi encontrado!"});
    };
    res.json({mensagem: `usuario ${usuario_deletado.nome}, do id ${usuario_deletado.id} foi deletado`});
    usuarios.splice(usuario_deletado, 1)

});



app.listen(3000);