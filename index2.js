import express from "express";
import {verificar} from "./middleware.js";


const app = express();
app.use(express.json());

let usuarios = [
  {
    
    nome: "admin",
    email: "admin@admin"
  }
]

app.get('/usuarios', (req, res) => {
    const limit = parseInt(req.query.limit) || usuarios.length;

    res.status(200).json(usuarios.slice(0, limit));

});
app.get("/teste",verificar, (req, res) =>{
    console.log("rota de teste")
})

app.delete("/usuarios/:id", verificar, (req, res)=>{
    const id = req.params
    let usuario_deletado = usuarios.findIndex(u => u.id == id);
    usuarios.splice(usuario_deletado, 1)
})
app.listen(3000)