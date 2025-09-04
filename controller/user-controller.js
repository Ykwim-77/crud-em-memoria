
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

function ListarUsuarios(req, res){
    console.log("cheguei no controller")

}

export {ListarUsuarios}