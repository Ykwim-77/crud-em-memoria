import express from "express";
import Router from "express";
import { ListarUsuarios, CriarUsuario, pegar1Usuario, atualizarUsuario } from "../controller/user-controller.js";

const roteador = Router();

// passar as rotas para ele 
roteador.get('/', (req, res) =>{

    ListarUsuarios(req,res);

});
roteador.post('/', (req, res) =>{
    CriarUsuario(req,res);
});
roteador.get('/:id', (req, res) =>{
    pegar1Usuario(req,res);
});
roteador.patch('/:id', (req, res) =>{
    atualizarUsuario(req,res);
});

roteador.delete('/:id', (req, res) =>{
    deletarUsuario(req,res);
});

export default roteador;

