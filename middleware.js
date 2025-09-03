export function verificar(req, res, next){
    const{ tipousuario} = req.body;
    if(tipousuario && tipousuario === "adm"){
        next();
    }
    else{
        res.status(401).json({mensagem: "não tem autorização"})
    }
}