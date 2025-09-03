import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let ultimoId = 1;

let usuarios = [
  {
    id: ultimoId,
    nome: "admin",
    email: "admin@admin"
  },
  {
    id: ++ultimoId,
    nome: "postman",
    email: "post@man.com.br"
  },
  {
    id: ++ultimoId,
    nome: "ana",
    email: "ana@email.com"
  },
  {
    id: ++ultimoId,
    nome: "carlos",
    email: "carlos@email.com"
  },
  {
    id: ++ultimoId,
    nome: "maria",
    email: "maria@email.com"
  },
  {
    id: ++ultimoId,
    nome: "joao",
    email: "joao@email.com"
  },
  {
    id: ++ultimoId,
    nome: "lucas",
    email: "lucas@email.com"
  },
  {
    id: ++ultimoId,
    nome: "beatriz",
    email: "bia@email.com"
  },
  {
    id: ++ultimoId,
    nome: "fernando",
    email: "fernando@email.com"
  },
  {
    id: ++ultimoId,
    nome: "juliana",
    email: "juliana@email.com"
  },
  {
    id: ++ultimoId,
    nome: "rafael",
    email: "rafa@email.com"
  },
  {
    id: ++ultimoId,
    nome: "lais",
    email: "lais@email.com"
  }
];

app.get('/usuarios', (req, res) =>{
    const limit = parseInt(req.query.limit) || usuarios.length;

    res.status(200).json(usuarios.slice(0, limit));

});

app.post('/usuarios', (req, res) =>{


    const {nome, email} = req.body;
    if(!nome || !email){
        return res.status(400).json({mensagem: "nome e email obrigatórios"});
    }

    const email_valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email_valido.test(email)){
        return res.status(400).json({mensagem: "email inválido!!"})
    }

    ultimoId++;
    const novoUsuario = { id: ultimoId, nome, email };
    usuarios.push(novoUsuario);
    return res.status(201).json({mensagem: "criado"});

    
});

app.get('/usuarios/:id', (req, res) =>{
    const { id } = req.params;
    const usuario = usuarios.find(u => u.id == idnumber)
    const idnumber = parseInt(id);
    if(isNaN(idnumber)){
      return res.status(400).json({mensagem: "o id precisa ser um número inteiro"})
    }
    if(!usuario){
        return res.status(404).json({mensagem: "usuario não encontrado!!"});
    }
    res.json(usuario);
});

app.patch('/usuarios/:id', (req, res) =>{
    const { id } = req.params;
    const idnumber = parseInt(id);
    const { nome, email} = req.body;
    

    const usuario = usuarios.find(u =>u.id == idnumber);
    if(isNaN(idnumber)){
      return res.status(400).json({mensagem: "o id precisa ser um número inteiro"})
    }
 
    if(!usuario){
        return res.status(404).json({mensagem: "usuario não encontrado!!!"});
    };




    if(email){
      let email_existente = usuarios.findIndex(u =>u.email === email);
      if(email_existente !== -1){
      return res.status(409).json({mensagem: "email já está cadastrado"})
      }
      usuario.email = email
    }

    if(!nome && !email){
      return res.status(400).json({mensagem: "manda pelo menos um"})
    }

    if(nome){
      let nome_existente = usuarios.findIndex(u =>u.nome === nome);
      if(nome_existente !== -1){
      return res.status(409).json({mensagem: "email já está cadastrado"})
      }
      usuario.nome = nome
    }

    if(email && nome){
      let email_existente = usuarios.findIndex(u =>u.email === email);
      if(email_existente !== -1){
      return res.status(409).json({mensagem: "email já está cadastrado"})
      }
      usuario.email = email;
      usuario.nome = nome;
      // if (nome) usuario.nome = nome;
      // if (email) usuario.email = email; #tem algum erro lógico aq!!!!!!!!!!
    }

    res.json({mensagem: `usuario ${usuario.nome}, do id ${usuario.id} foi alterado`});


});

app.delete('/usuarios/:id', (req, res) =>{
    const { id } = req.params;
    const idnumber = parseInt(id);
    if(isNaN(idnumber)){
      return res.status(400).json({mensagem: "o id precisa ser um número inteiro"})
    }
    let usuario_deletado = usuarios.findIndex(u => u.id == idnumber);
    let usuario_deletado_info = usuarios.find(u => u.id == idnumber);

    if(usuario_deletado === -1){
        return res.status(404).json({mensagem: "usuario não foi encontrado!"});
    };


    
    res.json({mensagem: `usuario ${usuario_deletado_info.nome}, do id ${usuario_deletado_info.id} foi deletado`});
    usuarios.splice(usuario_deletado, 1)

});


app.listen(3000);